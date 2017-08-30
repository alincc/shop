import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';

import { Product, OptionType, Variant } from '../../product';
import { Category, ErrorResponse, Message } from '../../../model/interface';
import { AddProduct } from '../../../checkout/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  variant: Variant;
  @Output() addToCart = new EventEmitter<any>();

  errorMsg: Message;
  noVariantSelected: boolean = false;
  category: Category;

  constructor() { }

  ngOnInit() {
    if (this.product) {
      if (this.product.deleted) {
        this.handleError({
          status: 403,
          message: 'This product have been removed',
          data: null,
        });
      }
    }
  }

  onVariantChange(data: any): void {
    this.noVariantSelected = false;
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  onAddToCart(): void {
    this.noVariantSelected = false;

    if (!this.variant) {
      this.noVariantSelected = true;
      return;
    }

    this.addToCart.emit(this.variant);
  }

  isInStock(quantity: number = 0): boolean {
    return quantity > 0;
  }

}
