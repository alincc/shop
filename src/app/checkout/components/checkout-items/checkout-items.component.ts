import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OrderLine, Shipping } from '../../../model/interface';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {
  @Input() items: OrderLine[];
  @Input() shipping: Shipping;
  @Input() subtotal: number;
  @Input() grandTotal: number;
  @Input() editable: boolean = false;
  @Output() deleteEmitter = new EventEmitter<OrderLine>();

  constructor() { }

  ngOnInit() {

  }

  onDelete(line: OrderLine): void {
    if (this.editable) {
      this.deleteEmitter.emit(line);
    }
  }

}
