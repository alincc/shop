import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Order, OrderLine, ShippingStatus, ErrorResponse, Message } from '../../../model/interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges {
  @Input() order: Order;
  @Input() items: OrderLine[];
  subtotal: number = 0;
  errorMsg: Message;
  showTicketForm: boolean = false;
  private ShippingStatus: typeof ShippingStatus = ShippingStatus

  constructor() {}

  ngOnInit() {
    if (this.order) {
      this.order = new Order(this.order);
    }
    if (this.items) {
      this.items = this.items.map(line => new OrderLine(line));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.order && changes.order.currentValue) {
      this.order = new Order(changes.order.currentValue);
    }

    if (changes.items && changes.items.currentValue) {
      this.items = changes.items.currentValue.map(line => new OrderLine(line));
      this.subtotal = this.calculateSubTotal();
    }
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  calculateSubTotal(): number {
    return this.items.reduce((sum, item) => {
      return sum + item.getTotalPrice();
    }, 0);
  }
}
