import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderLine, Shipping } from '../model/interface';

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

  @Output()
  deleteEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.items = this.items.map(item => new OrderLine(item));
  }

  onDelete(product: OrderLine): void {
    if (this.editable) {
      this.deleteEmitter.emit(product);
    }
  }

}
