import { Product } from '../products/product';

export { categorySchema } from '../model/schema';

export interface ICategory {
  _id: string;
  name: string;
  image: string;
  products: Product[];
  description: string;
  active: boolean;
}

export class Category implements ICategory {
  _id: string;
  name: string;
  image: string;
  products: Product[];
  description: string;
  active: boolean;

  constructor(category: ICategory) {
    this._id = category._id;
    this.name = category.name;
    this.image = category.image;
    this.products = category.products
      .map(product => new Product(product))
      .filter(product => product.active === true);

    this.description = category.description;
    this.active = category.active;
  }
}
