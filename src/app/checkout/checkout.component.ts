import { Component, OnInit } from '@angular/core';
import { OrderLine, Product, Customer } from '../model/interface';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products: OrderLine[];
  private selectedShippingCost = 0;
  private subtotal = 0;
  private form = {};

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loadProducts();
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
    };

    this.customerService.create(inputCustomer).flatMap(res =>
      this.checkoutService.createOrder(res.data, this.products, this.total())
    ).subscribe(data => {
      console.log(data);
    });
  }

  loadProducts(): void {
    this.products = this.cartService.getItems();
  }

  getProducts(): OrderLine[] {
    return this.products;
  }

  setProducts(products: OrderLine[]): void {
    this.products = products;
  }

  total(): number {
    return this.cartService.getTotalPrice();
  }

  getTotalWithShipping(): number {
    return this.total() + this.selectedShippingCost;
  }

  calculateSubTotal(): number {
    this.subtotal = this.cartService.getTotalPrice();
    return this.subtotal;
  }

  setShippingCost(price: number) {
    this.selectedShippingCost = price;
  }

}
