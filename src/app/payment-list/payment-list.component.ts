import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../model/interface';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  @Output() paymentEmitter: EventEmitter<Payment> = new EventEmitter();
  @Input() selectedPayment: Payment;
  @Input() payments: Payment[];

  constructor() { }

  ngOnInit() {
  }

  selectPayment(payment): void {
    this.paymentEmitter.emit(payment);
  }

}
