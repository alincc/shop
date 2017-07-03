import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as _ from 'lodash';

import { ErrorResponse, Message, Combination, Attribute } from '../model/interface';
import { ProductService, CategoryService, CartService } from '../services';
import { Product, Category } from '../model/interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  errorMsg: Message;
  category: Category;
  attributes: any[] = [];
  validCombinations: any[] = [];
  matchingCombinations: any[] = null;
  selectedCombination: Combination;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private toastr: ToastsManager,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(params['id']))
      .subscribe(
        product => {
          this.product = new Product(product);

          this.attributes = this.mapAttributes(this.product.combinations);
          this.validCombinations = this.getValidCombinations();
        },
        err => this.handleError(err),
      );
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  addToCart(): void {
    const combinations = this.attributes.map(attribute =>
      ({
        attribute: new Attribute(attribute.name),
        value: attribute.selected,
      })
    );

    this.toastr.success('The product was added to your cart', 'Added!');
    this.cartService.add(this.product, combinations, this.selectedCombination);
  }

  isInStock(): boolean {
    return this.product.getQuantity(this.selectedCombination) > 0;
  }

  allAttributesSelected(): boolean {
    return this.attributes.filter(attribute => attribute.selected === null).length === 0;
  }

  getValidCombinations(): any[] {
    return this.product.combinations.map(combination => {
      return {
        _id: combination._id,
        data: combination.attributes.map(attribute => `${attribute.attribute.name}:${attribute.value.value}`)
      }
    });
  }

  mapAttributes(combinations: Combination[]): any[] {
    return combinations.reduce((array, curr) => {
      curr.attributes.forEach((value, key) => {
        const existing = array.find(item => item.name == value.attribute.name);

        const valueData = {
          label: value.value.label,
          value: value.value.value,
          quantity: curr.quantity,
        };

        if (existing) {
          if (!existing.values.find(item => item.value == value.value.value)) {
            existing.values.push(valueData)
          }
        }
        else {
          array.push({
            _id: value.attribute._id,
            name: value.attribute.name,
            selected: null,
            values: [valueData],
          })
        }
      });

      return array;
    }, []);
  }

  attributeEnabled(value, attribute, event): boolean {
    if (this.matchingCombinations === null) return true;
    if (this.attributes.filter(item => item.selected !== null).length == 0) return true;
    if (this.attributes.find(item => item.name == attribute.name && item.selected !== null)) return true;

    return this.matchingCombinations.reduce((flag, combination) =>
      combination.data.find(item => item.includes(`${attribute.name}:${value.value}`)) ? true : flag, false);
  }

  onAttributeChange(event, attribute) {
    if (attribute.selected === null) {
      return null;
    }

    const selectedValues = this.attributes
      .filter(attribute => attribute.selected !== null)
      .map(attribute => `${attribute.name}:${attribute.selected.value}`);

    this.matchingCombinations = this.validCombinations.filter(combination => {
      const found = _.intersection(combination.data, selectedValues);

      return found.length == selectedValues.length;
    })

    const valid = this.matchingCombinations.reduce((flag, item) =>
      _.intersection(item.data, selectedValues).length == selectedValues.length ? true : flag, false);

    // If the values is not valid reset the
    // other values, except the one just changed
    if (!valid) {
      this.attributes = this.attributes.map(item => {
        if (item.name == attribute.name) return item;

        item.selected = null;
        return item;
      });
    }

    // If there is only one matching combinations and all attributes
    // are selected, make the attribute the selected on
    if (this.matchingCombinations.length == 1 && this.allAttributesSelected()) {
      this.selectedCombination = this.product.combinations.find(combination => combination._id === _.head(this.matchingCombinations)._id);
    }
    else {
      this.selectedCombination = null;
    }
  }

}
