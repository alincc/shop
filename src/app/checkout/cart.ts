import { Product } from '../products/product';
import { Customer, OrderLine, ShippingLine, Payment, ShippingAddress } from '../model/interface';

export interface IAddProduct {
  product: Product;
}

export class AddProduct implements IAddProduct {
  constructor(public product: Product) {}
}

export interface CreateOrder {
  items: OrderLine[];
  user: string | null;
  total: number;
  shipping: ShippingLine;
  payment: Payment;
  shippingAddress: ShippingAddress;
}
