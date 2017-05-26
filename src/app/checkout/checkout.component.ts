import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderLine, Product, Customer, Shipping } from '../model/interface';
import { CartService, CheckoutService, CustomerService, ShippingService, AuthService } from '../services';
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

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private customerService: CustomerService,
    private shippingService: ShippingService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadShipping();
    this.calculateSubTotal();
  }

  onSubmit() {
    let customer: Customer = this.formComponent.form;

    this.customerService.create(customer).flatMap(res =>
      this.checkoutService.createOrder(res.data, this.products, this.total(), this.selectedShipping)
    ).subscribe(data => {
      console.log(data);
    });
  }

  loadProducts(): void {
    this.products = this.cartService.getItems();
  }

  loadShipping(): void {
    this.shippingService.getAllShipping()
      .subscribe(data => this.shipping = data);
  }

  getProducts(): OrderLine[] {
    return this.products;
  }

  getShipping(): Shipping[] {
    return this.shipping;
  }

  getCustomer(): Customer {
    let user = this.authService.getAuthedUser();

    if (user && user.customer) {
      return user.customer;
    }
    return null;
  }

  getEmail(): string {
    let user = this.authService.getAuthedUser();

    return user.email || "";
  }

  setProducts(products: OrderLine[]): void {
    this.products = products;
  }

  total(): number {
    return this.cartService.getTotalPrice();
  }

  calculateSubTotal(): number {
    this.subtotal = this.cartService.getTotalPrice();
    return this.subtotal;
  }

  setSelectedShipping(shipping: Shipping) {
    this.selectedShipping = shipping;
  }

}
