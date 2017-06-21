import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderLine, Product, Customer, Shipping, ShippingAddress, Payment, ShippingLine } from '../model/interface';
import { CartService, CheckoutService, CustomerService, ShippingService, AuthService, PaymentService } from '../services';
import { FAKE_USER1 } from '../../testing/mock/mocks';
import { Observable } from 'rxjs/Observable';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(CheckoutFormComponent) formComponent: CheckoutFormComponent;

  products: OrderLine[];
  private shipping: Shipping[];
  private selectedShipping: Shipping;
  private subtotal = 0;
  private form = {};
  private customer: Customer;
  isFinished = false;
  orderCreated = false;
  private selectedPayment: Payment;
  private payments: Payment[];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private customerService: CustomerService,
    private shippingService: ShippingService,
    private authService: AuthService,
    private paymentService: PaymentService,
  ) { }

  ngOnInit() {
    this.loadCustomer();
    this.loadProducts();
    this.loadShipping();
    this.loadPayments();
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
      this.selectedShipping,
      '',
      this.selectedShipping.price,
      0
    );

    this.authService.getAuthedUser()
      .subscribe(auth => {
        // If user is authed
        if (auth) {
          // If authed user have customer information
          if (auth.customer) {
            let customerData = new Customer(auth.customer);

            // Check if customer data differs from the one entered
            if (customerData.differs(customer)) {
              // TODO: should display a dialog asking user if he wants to update customer data
              this.customerService.update(customerData._id, customer)
                .switchMap((res) => this.checkoutService.createOrder(res.data, this.products, this.total(), shipping, this.selectedPayment, shippingAddress))
                .subscribe(
                  res => this.orderCreatedSuccess(),
                  err => console.log(err)
                );
            }
            else {
              this.checkoutService.createOrder(customerData, this.products, this.total(), shipping, this.selectedPayment, shippingAddress)
                .subscribe(
                  res => this.orderCreatedSuccess(),
                  err => console.log(err)
                );
            }
          }
          else {
            // If authed but no customer information exists
            this.customerService.create(customer)
              .switchMap(newCustomer => this.authService.update({ customer: newCustomer.data }))
              .switchMap(user => this.checkoutService.createOrder(user.customer, this.products, this.total(), shipping, this.selectedPayment, shippingAddress))
              .subscribe(
                res => this.orderCreatedSuccess(),
                err => console.log(err)
              );
          }
        }
        else {
          // If user is not authenticated
          this.customerService.create(customer)
            .switchMap(newCustomer => this.checkoutService.createOrder(newCustomer.data, this.products, this.total(), shipping, this.selectedPayment, shippingAddress))
            .subscribe(
              res => this.orderCreatedSuccess(),
              err => console.log(err)
            );
        }
      })
  }

  onSelectPayment(payment): void {
    this.selectedPayment = payment;
  }

  orderCreatedSuccess() {
    this.orderCreated = true;
    this.cartService.clear();
  }

  loadProducts(): void {
    this.setProducts(this.cartService.getItems());
  }

  loadShipping(): void {
    this.shippingService.getAllShipping()
      .subscribe(data => this.shipping = data);
  }

  loadPayments(): void {
    this.paymentService.getActivePayments()
      .subscribe(payments => this.payments = payments);
  }

  getProducts(): OrderLine[] {
    return this.products;
  }

  getShipping(): Shipping[] {
    return this.shipping;
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
    this.setProducts(this.cartService.delete(line));
  }

  setProducts(products: OrderLine[]): void {
    this.products = products;
    this.calculateSubTotal();
  }

  total(): number {
    if (!this.selectedShipping) {
      return this.cartService.getTotalPrice();
    }

    return this.cartService.getTotalPrice() + this.selectedShipping.price;
  }

  calculateSubTotal(): number {
    this.subtotal = this.cartService.getTotalPrice();
    return this.subtotal;
  }

  setSelectedShipping(shipping: Shipping) {
    this.selectedShipping = shipping;
  }

}
