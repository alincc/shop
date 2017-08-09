import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../order/order';
import { ShippingStatus } from '../../model/interface';

@Component({
  selector: 'app-order-table',
  template: `
    <table class="table" *ngIf="orders">
      <thead>
        <tr>
          <th>OrderID</th>
          <th>Status</th>
          <th>Date</th>
          <th>Total</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let order of orders">
          <td>{{ order._id }}</td>
          <td>{{ ShippingStatus[order.status] }}</td>
          <td>{{ order.createdAt | date:'short' }}</td>
          <td class="price">{{ order.total | currency:'USD':true }}</td>
          <td><a [routerLink]="['/order', order._id]">Details</a></td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class OrderTableComponent implements OnInit {
  @Input() orders: Order[];
  private ShippingStatus: typeof ShippingStatus = ShippingStatus;

  constructor() {  }

  ngOnInit() {}
}
