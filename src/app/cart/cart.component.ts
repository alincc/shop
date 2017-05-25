import { Component, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { CartService } from '../services/cart.service';
import { OrderLine, Product } from '../model/interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private products: OrderLine[];

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

  getProducts(): OrderLine[] {
    return this.products;
  }

  contains(orderLine: OrderLine): boolean {
    return this.cartService.contains(orderLine.product);
  }

  removeItem(orderLine: OrderLine): void {
    this.cartService.delete(orderLine.product);
    this.products = this.cartService.getItems();

    this.toastr.success('Product was removed from your cart', 'Success');
  }

}
