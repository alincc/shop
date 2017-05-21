import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { CartProduct } from '../model/CartProduct';

@Injectable()
export class CartService {
  private items: CartProduct[] = [];

  constructor() { }

  add(product: Product): void {
    if (this.contains(product)) {
      this.items.map(item => {
        if (item.product.id === product.id) {
          item.quantity += 1;
        }
        return item;
      });
    }
    else {
      this.items.push(new CartProduct(product, 1));
    }
  }

  contains(product: Product): boolean {
    return this.items.filter(item => item.product.id === product.id).length > 0;
  }

  delete(product: Product): void {
    this.items = this.items.filter(item => item.product.id !== product.id);
  }

  clear(): void {
    this.items = [];
  }

  getItems(): CartProduct[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => {
      return sum + item.product.price;
    }, 0);
  }

  getItem(product: Product): CartProduct {
    return this.items.find(item => item.product.id === product.id);
  }

}
