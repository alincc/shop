import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../model/CartProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  products: CartProduct[];
  private selectedShippingCost: number = 0;
  private subtotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadProducts();
    this.calculateSubTotal();
  }

  loadProducts(): void {
    this.products = this.cartService.getItems();
  }

  getProducts(): CartProduct[] {
    return this.products;
  }

  setProducts(products: CartProduct[]): void {
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
