import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';
import { Order } from '../../order/order';

@Component({
  selector: 'app-profile-details',
  template: `
    <div class="profile">

      <div class="message negative" *ngIf="!user && isFinished">User not found</div>

      <div *ngIf="user">

        <h1>Welcome back, {{ user.username }}</h1>

        <div class="widget">
          <h3>Your orders</h3>

          <div class="message info" *ngIf="!orders.length">
            You have not placed any orders yet
          </div>

          <div *ngIf="orders && orders.length">

            <app-order-table [orders]="orders"></app-order-table>

          </div>
        </div>

        <button class="button" type="button" (click)="logout.emit()">Sign out</button>
      </div>

    </div>
  `,
  styles: [`
    .price {
      font-size: inherit;
    }
  `],
})
export class ProfileDetailsComponent implements OnInit, OnChanges {
  isFinished: boolean = false;
  @Input() user: User;
  @Input() orders: Order[];
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.orders && changes.orders.currentValue) {
      this.orders = changes.orders.currentValue;
    }
  }
}
