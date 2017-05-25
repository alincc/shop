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

interface Customer {
  _id?: String;
  phone: String;
  country: String;
  postnumber: String;
  address: String;
  lastname: String;
  firstname: String;
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

class Order {
  _id: String;
  updatedAt: String;
  createdAt: String;
  total: number;
  status?: ShippingStatus;
  items: OrderLine[];
  customer?: Customer; // TODO: should not be optional
  shipping?: Shipping;

  constructor(order: Order) {
    this._id = order._id;
    this.updatedAt = order.updatedAt;
    this.createdAt = order.createdAt;
    this.total = order.total;
    this.status = order.status ? order.status : null;
    this.items = order.items ? order.items : [];
    this.customer = order.customer ? order.customer : null;
    this.shipping = order.shipping ? order.shipping : null;
  }

  calculateSubTotal() {
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
  Order,
  Shipping,
  Product,
}
