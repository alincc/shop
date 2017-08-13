import { Product } from '../products/product';
import { Combination, Customer, OrderLine, ShippingLine, Payment, ShippingAddress } from '../model/interface';

export interface IAddProduct {
  product: Product;
  combination: any[];
  selectedCombination?: Combination;
}

export class AddProduct implements IAddProduct {
  constructor(
    public product: Product,
    public combination: any[] = [],
    public selectedCombination = null
  ) {}
}

export interface CreateOrder {
  // customer: Customer;
  items: OrderLine[];
  user: string | null;
  total: number;
  shipping: ShippingLine;
  payment: Payment;
  shippingAddress: ShippingAddress;
}
