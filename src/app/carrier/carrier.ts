export class Shipping {
  _id: string;
  name: string;
  price: number;
  description?: string;
  active: boolean;
}

export { carrierSchema } from '../model/schema';
