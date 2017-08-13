export class Payment {
  _id: string;
  name: string;
  image?: string;
  active: boolean;
}

export { paymentSchema } from '../model/schema';
