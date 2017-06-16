import { Injectable } from '@angular/core';
import { Product, OrderLine } from '../model/interface';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  private items: OrderLine[] = [];

  constructor(private storageService: StorageService) {
    if (this.storageService.getItem('cart') !== null) {
      this.items = JSON.parse(this.storageService.getItem('cart'));
    }
  }

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
      const orderLine: OrderLine = new OrderLine({
        product: product,
        quantity: 1,
        price: product.price,
      });

      this.items.push(orderLine);
    }

    this.updateStorage();
  }

  updateStorage() {
    this.storageService.setItem('cart', JSON.stringify(this.items));
  }

  contains(product: Product): boolean {
    return this.items.filter(item => item.product._id === product._id).length > 0;
  }

  delete(product: Product): OrderLine[] {
    this.items = this.items.filter(item => item.product._id !== product._id);

    this.updateStorage();
    return this.items;
  }

  clear(): void {
    this.items = [];

    this.updateStorage();
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
