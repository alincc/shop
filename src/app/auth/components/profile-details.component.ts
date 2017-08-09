import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-profile-details',
  template: `
    <div class="profile">

      <div class="message negative" *ngIf="!user && isFinished">User not found</div>

      <div *ngIf="user">

        <h1>Welcome back, {{ user.username }}</h1>

        <div class="widget">
          <h3>Your orders</h3>

          <div class="message info" *ngIf="!user.customer?.orders">
            You have not placed any orders yet
          </div>

          <div *ngIf="user.customer">

            <app-order-table [orders]="user.customer.orders"></app-order-table>

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
export class ProfileDetailsComponent implements OnInit {
  isFinished: boolean = false;
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
}
