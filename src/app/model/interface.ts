interface User {
  _id: String,
  admin: boolean;
  username: String;
  password: String;
  email: string;
  customer?: Customer;
  ip: String;
}

interface Category {
  _id: String;
  name: String;
  image: String;
}

interface CartProduct {
  product: Product;
  quantity: number;
}

class ContactMessage {
  constructor(public name: String, public email: String, public message: String) { }
}

class Customer {
  _id?: String;
  phone: String;
  country: String;
  email: string;
  postnumber: String;
  city: String;
  address: String;
  lastname: String;
  firstname: String;
  orders: Order[];
}

interface OrderLine {
  product: Product;
  quantity: number;
}

export enum ShippingStatus {
  Pending = 0,
  AwaitingShipment = 1,
  Shipped = 2,
  Completed = 4,
}

interface IOrder {
  _id: String;
  updatedAt: String;
  createdAt: String;
  total: number;
  status?: ShippingStatus;
  items: OrderLine[];
  customer?: Customer; // TODO: should not be optional
  shipping?: Shipping;
}

class Order implements IOrder {
  _id: String;
  updatedAt: String;
  createdAt: String;
  total: number;
  status?: ShippingStatus;
  items: OrderLine[];
  customer?: Customer; // TODO: should not be optional
  shipping?: Shipping;

  constructor(order: IOrder) {
    this._id = order._id;
    this.updatedAt = order.updatedAt;
    this.createdAt = order.createdAt;
    this.total = order.total;
    this.status = order.status ? order.status : null;
    this.items = order.items ? order.items : [];
    this.customer = order.customer ? order.customer : null;
    this.shipping = order.shipping ? order.shipping : null;
  }

  public calculateSubTotal(): number {
    return this.items.reduce((sum, item) => {
      return sum + (item.product.price * item.quantity);
    }, 0);
  }
}

class Product {
  _id: String;
  category?: Category;
  category_id?: String;
  name: String;
  description: String;
  image: String;
  price: number;
}

class Shipping {
  _id: String;
  name: String;
  price: Number;
  description?: String;
}

export {
  Category,
  CartProduct,
  ContactMessage,
  Customer,
  OrderLine,
  IOrder,
  Order,
  User,
  Shipping,
  Product,
}
