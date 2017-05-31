import { Injectable } from '@angular/core';
import { Product, OrderLine } from '../model/interface';

@Injectable()
export class CartService {
  private items: OrderLine[] = [];

  constructor() { }

  add(product: Product): void {
    if (this.contains(product)) {
      this.items.map(item => {
        if (item.product._id === product._id) {
          item.quantity += 1;
        }
        return item;
      });
    }
    else {
      this.items.push({ product: product, quantity: 1 });
    }
  }

  contains(product: Product): boolean {
    return this.items.filter(item => item.product._id === product._id).length > 0;
  }

  delete(product: Product): OrderLine[] {
    this.items = this.items.filter(item => item.product._id !== product._id);
    return this.items;
  }

  clear(): void {
    this.items = [];
  }

  getItems(): OrderLine[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
  }

  getItem(product: Product): OrderLine {
    return this.items.find(item => item.product._id === product._id);
  }

}
