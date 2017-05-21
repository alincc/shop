import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { CartService } from '../services/cart.service';
import { Product } from '../model/product';
import { CartProduct } from '../model/CartProduct';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private products: CartProduct[];

  constructor(
    private cartService: CartService,
    public toastr: ToastsManager,
  ) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.cartService.getItems();
  }

  removeItem(cartProduct: CartProduct): void {
    this.cartService.delete(cartProduct.product);
    this.products = this.cartService.getItems();

    this.toastr.success('Product was removed from your cart', 'Success');
  }

}
