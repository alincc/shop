import { Category } from './Category';

export interface Product {
  _id: String;
  category?: Category;
  category_id?: String;
  name: String;
  description: String;
  image: String;
  price: number;
}
