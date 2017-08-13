import {
  ShippingStatus,
  OrderLine,
  Customer,
  ShippingLine,
  ShippingAddress,
  Payment
} from '../model/interface';

export interface IOrder {
  _id: string;
  updatedAt: String;
  createdAt: String;
  total: number;
  status?: ShippingStatus;
  statusLog: ShippingStatusEntry[];
  items: OrderLine[];
  customer?: Customer; // TODO: remove property
  user?: string;
  // shipping?: Shipping;
  shipping?: ShippingLine;
  shippingAddress?: ShippingAddress;
  payment?: Payment;
}

export class Order implements IOrder {
  _id: string;
  updatedAt: String;
  createdAt: String;
  total: number;
  status?: ShippingStatus;
  statusLog: ShippingStatusEntry[];
  items: OrderLine[];
  customer?: Customer; // TODO: remove property
  user?: string;
  shipping?: ShippingLine;
  shippingAddress?: ShippingAddress;
  payment?: Payment;

  constructor(order: IOrder) {
    this._id = order._id;
    this.updatedAt = order.updatedAt;
    this.createdAt = order.createdAt;
    this.total = order.total;
    this.user = order.user ? order.user : null;
    this.status = order.status;
    this.statusLog = order.statusLog.map(item => new ShippingStatusEntry(item));
    this.items = order.items ? order.items : [];
    // this.items = order.items ? order.items.map(item => new OrderLine(item)) : [];
    this.customer = order.customer ? new Customer(order.customer) : null;
    this.shipping = order.shipping ? order.shipping : null;
    this.payment = order.payment ? order.payment : null;
    this.shippingAddress = order.shippingAddress ? new ShippingAddress(order.shippingAddress) : null;
  }

  public calculateSubTotal(): number {
    return this.items.reduce((sum, item) => {
      return sum + item.getTotalPrice();
    }, 0);
  }

  public getShippingStatus(): string {
    return ShippingStatus[this.status];
  }
}

interface IShippingStatusEntry {
  _id: string;
  createdAt: string;
  status: number;
}

class ShippingStatusEntry {
  _id: string;
  createdAt: string;
  status: number;

  constructor(shippingStatusEntry: IShippingStatusEntry) {
    this._id = shippingStatusEntry._id;
    this.createdAt = shippingStatusEntry.createdAt;
    this.status = shippingStatusEntry.status;
  }

  public getShippingStatus(): string {
    return ShippingStatus[this.status];
  }
}

export interface AddProduct {
  order: Order;
  line: OrderLine;
}
