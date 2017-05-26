import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/interface';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {

  @Input() form: any;
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
    this.initializeForm(this.customer);
  }

  initializeForm(customer: Customer): void {
    this.form = {
      ...customer,
    };
  }
}
