import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Customer } from '../../../model/interface';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit, OnChanges {
  @Input() form: any;
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.customer && changes.customer.currentValue) {
      this.initializeForm(changes.customer.currentValue);
    }
  }

  initializeForm(customer: Customer): void {
    this.form = customer;
  }
}
