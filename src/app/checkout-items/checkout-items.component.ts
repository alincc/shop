import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
