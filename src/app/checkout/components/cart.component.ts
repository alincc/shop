import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OrderLine } from '../../model/interface';

@Component({
  selector: 'app-cart',
  template: `
    <div class="cart">
      <h1>Cart</h1>
      <div class="products" *ngIf="products.length">

        <div *ngFor="let line of products">
          <h2>{{ line.variant.name }}</h2>
          <h5 *ngIf="line.variant.optionsText">{{ line.variant.optionsText }}</h5>
          <p>Quantity: {{ line.quantity }}</p>
          <button type="button" (click)="onRemoveItem(line)">Remove</button>
        </div>

        <div>
          <a routerLink="/checkout" class="button">Checkout</a>
        </div>

      </div>

      <div class="empty-cart" *ngIf="!products.length">
        <p>Your cart is empty</p>
      </div>

    </div>
  `,
  styles: [],
})
export class CartComponent implements OnInit {
  @Input() products: OrderLine[];
  @Output() removeItem = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  onRemoveItem(orderLine: OrderLine): void {
    this.removeItem.emit(orderLine);
  }
}
