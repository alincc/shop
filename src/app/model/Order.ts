import { Product } from './product';
import { Customer } from './Customer';

export interface Order {
  _id: String;
  // updatedAt: String;
  // createdAt: String;
  total: number;
  items: Product[],
  customer?: Customer, // TODO: should not be optional
}
