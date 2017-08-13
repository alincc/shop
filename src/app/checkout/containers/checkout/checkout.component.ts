import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OrderLine, Product, Customer, Shipping, ShippingAddress, Payment, ShippingLine, User } from '../../../model/interface';
import { CartService, CheckoutService, CustomerService } from '../../../services';
import { AuthService } from '../../../auth/auth.service';
import { CreateOrder } from '../../cart';
import { CheckoutFormComponent } from '../../components/checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(CheckoutFormComponent) formComponent: CheckoutFormComponent;

  @Input() products: OrderLine[];
  @Input() subtotal: number = 0;
  @Input() selectedPayment: Payment;
  @Input() carriers: Shipping[];
  @Input() payments: Payment[];
  @Input() auth: User;
  @Input() selectedCarrier: Shipping;
  @Output() removeLine = new EventEmitter<OrderLine>();
  @Output() selectPayment = new EventEmitter<Payment>();
  @Output() selectCarrier = new EventEmitter<Shipping>();
  @Output() createOrder = new EventEmitter<CreateOrder>();
  private form = {};
  private customer: Customer; // TODO: deprecate
  isFinished = false;
  orderCreated = false;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private customerService: CustomerService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loadCustomer();
  }

  onSubmit() {
    const customer: Customer = this.formComponent.form;

    const shippingAddress: ShippingAddress = new ShippingAddress({
      email: customer.email,
      phone: customer.phone,
      firstname: customer.firstname,
      lastname: customer.lastname,
      postnumber: customer.postnumber,
      address: customer.address,
      country: customer.country,
      city: customer.city,
    });

    const shipping: ShippingLine = new ShippingLine(
      this.selectedCarrier,
      '',
      this.selectedCarrier.price,
      0
    );

    const createOrder: CreateOrder = {
      user: this.auth ? this.auth._id : null,
      items: this.products,
      total: this.total(),
      shipping: shipping,
      payment: this.selectedPayment,
      shippingAddress: shippingAddress,
    };

    this.createOrder.emit(createOrder);

    return this.orderCreatedSuccess();
  }

  onSelectPayment(payment: Payment): void {
    this.selectPayment.emit(payment);
  }

  orderCreatedSuccess() {
    this.orderCreated = true;
    this.cartService.clear();
  }

  loadCustomer(): void {
    if (this.authService.getAuthedUser() == null) {
      this.isFinished = true;
      return null;
    }
    this.authService.getAuthedUser()
      .subscribe(
        user => this.customer = user && user.customer,
        error => console.log(error),
        () => this.isFinished = true,
      );
  }

  removeProduct(line: OrderLine): void {
    this.removeLine.emit(line);
  }

  total(): number {
    if (!this.selectedCarrier) {
      return this.subtotal;
    }

    return this.subtotal + this.selectedCarrier.price;
  }

  setSelectedCarrier(carrier: Shipping) {
    this.selectCarrier.emit(carrier);
  }

}
