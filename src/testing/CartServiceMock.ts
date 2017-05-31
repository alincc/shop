import { Injectable } from '@angular/core';
import { Product, OrderLine } from '../app/model/interface';

export { CartService } from '../app/services';

const FAKE_PRODUCT1: Product = {
  _id: "1",
  name: "Product 1",
  description: "Description 1",
  image: "Image 1",
  price: 100,
};

const FAKE_PRODUCT2: Product = {
  _id: "2",
  name: "Product 2",
  description: "Description 2",
  image: "Image 2",
  price: 100,
};

export const PRODUCT_NOT_IN_CART: OrderLine = {
  product: {
    _id: "999",
    name: "Product 999",
    description: "Description 999",
    image: "Image 999",
    price: 999,
  },
  quantity: 0
};

export const MOCK_ITEMS = [{ product: FAKE_PRODUCT1, quantity: 1 }, { product: FAKE_PRODUCT2, quantity: 2 }];

@Injectable()
export class CartServiceMock {
  private items: OrderLine[] = [];

  constructor() {
    this.items = MOCK_ITEMS;
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
