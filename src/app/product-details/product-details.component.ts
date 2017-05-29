import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ErrorResponse, Message } from '../model/interface';
import { ProductService, CategoryService, CartService } from '../services';
import { Product, Category } from '../model/interface';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  private errorMsg: Message;
  category: Category;

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
        product => this.product = product,
        err => this.handleError(err),
      );
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  addToCart(): void {
    this.toastr.success('The product was added to your cart', 'Added!');
    this.cartService.add(this.product);
  }

}
