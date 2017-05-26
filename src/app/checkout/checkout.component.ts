import { Component, OnInit } from '@angular/core';
import { OrderLine, Product, Customer, Shipping } from '../model/interface';
import { CartService, CheckoutService, CustomerService, ShippingService } from '../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products: OrderLine[];
  private shipping: Shipping[];
  private selectedShipping: Shipping;
  private subtotal = 0;
  private form = {};

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private customerService: CustomerService,
    private shippingService: ShippingService
  ) { }

  ngOnInit() {
    this.loadProducts();
    this.loadShipping();
    this.calculateSubTotal();
  }

  onSubmit() {
    // TODO: fields should be fetched from the form instead of hardcoded
    const inputCustomer: Customer = {
      phone: 'phone',
      country: 'country',
      postnumber: 'postnumber',
      address: 'address',
      lastname: 'lastname',
      firstname: 'firstname',
      orders: [],
    };

    this.customerService.create(inputCustomer).flatMap(res =>
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
