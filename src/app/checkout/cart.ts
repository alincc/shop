import { Product } from '../products/product';
import { Combination } from '../model/interface';

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
