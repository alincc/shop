import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from '../model/CartProduct';

@Component({
  selector: 'app-checkout-items',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {
  @Input() items: CartProduct[];
  @Input() shippingCost: number;
  @Input() subtotal: number;
  @Input() grandTotal: number;

  constructor() { }

  ngOnInit() {

  }

}
