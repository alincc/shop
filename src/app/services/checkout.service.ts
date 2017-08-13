import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order, OrderLine, Customer, ShippingLine, Payment, ShippingAddress } from '../model/interface';
import { CreateOrder } from '../checkout/cart';

@Injectable()
export class CheckoutService {

  private url = 'http://localhost:9000/api/order';

  constructor(private http: Http) { }

  // createOrder(customer: Customer, items: OrderLine[], total: number, shipping: ShippingLine, payment: Payment, shippingAddress: ShippingAddress) {
  createOrder(createOrder: CreateOrder) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const body = JSON.stringify({
      // customer: createOrder.customer,
      user: createOrder.user,
      total: createOrder.total,
      items: createOrder.items,
      shipping: createOrder.shipping,
      payment: createOrder.payment,
      shippingAddress: createOrder.shippingAddress,
    });

    return this.http.post(this.url, body, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getOrder(id: String): Observable<Order> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.json() || 'Server error');
  }

}
