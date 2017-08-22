import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { OrderLine } from '../model/interface';
import { Product, Variant } from '../products/product';
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

  add(variant: Variant): Observable<OrderLine[]> {
    if (this.contains(variant)) {
      this.items.map(item => {
        if (item.variant._id === variant._id) {
          item.quantity += 1;
        }
        return item;
      });
    }
    else {
      const orderLine: OrderLine = new OrderLine({
        variant: variant,
        quantity: 1,
        price: variant.price,
      });

      this.items.push(orderLine);
    }

    this.updateStorage();

    return Observable.of(this.items);
  }

  updateStorage() {
    this.storageService.setItem('cart', JSON.stringify(this.items));
  }

  contains(variant: Variant): boolean {
    return this.items.filter(item => item.variant._id === variant._id).length > 0;
  }

  delete(line: OrderLine): Observable<OrderLine[]> {
    this.items = this.items.filter(item => item.variant._id !== line.variant._id);

    this.updateStorage();

    return Observable.of(this.items);
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
      return sum + (item.variant.price * item.quantity);
    }, 0);
  }

}
