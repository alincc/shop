import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Product, OrderLine, Combination } from '../model/interface';
import { StorageService } from './storage.service';

@Injectable()
export class CartService {
  private items: OrderLine[] = [];

  constructor(private storageService: StorageService) {
    if (this.storageService.getItem('cart') !== null) {
      this.items = JSON.parse(this.storageService.getItem('cart'));
    }

    this.items = this.items.map(item => new OrderLine(item));
  }

  add(product: Product, combination: any = [], selectedCombination: Combination = null): void {
    if (this.contains(product, combination)) {
      this.items.map(item => {

        if (combination) {
          if (item.product._id === product._id && _.isEqual(item.combination, combination)) {
            item.quantity += 1;
          }
        }
        else {
          if (item.product._id === product._id) {
            item.quantity += 1;
          }
        }

        return item;
      });
    }
    else {
      const orderLine: OrderLine = new OrderLine({
        product: product,
        quantity: 1,
        combination: combination,
        selectedCombination: selectedCombination,
        price: product.getCurrentPrice(),
      });

      this.items.push(orderLine);
    }

    this.updateStorage();
  }

  updateStorage() {
    this.storageService.setItem('cart', JSON.stringify(this.items));
  }

  contains(product: Product, combination: any = []): boolean {
    return this.items.filter(item => item.product._id === product._id && _.isEqual(item.combination, combination)).length > 0;
  }

  delete(line: OrderLine): OrderLine[] {
    this.items = this.items.filter(item => {
      return !(item.product._id === line.product._id && item.combination === line.combination)
    });

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
      return sum + (item.product.getCurrentPrice() * item.quantity);
    }, 0);
  }

  getItem(product: Product): OrderLine {
    return this.items.find(item => item.product._id === product._id);
  }

}
