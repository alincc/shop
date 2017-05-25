import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order, OrderLine, Customer } from '../model/interface';

@Injectable()
export class CheckoutService {

  private url = 'http://localhost:9000/api/order';

  constructor(private http: Http) { }

  createOrder(customer: Customer, items: OrderLine[], total: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    const body = JSON.stringify({
      customer: customer,
      total: total,
      items: items,
    });

    return this.http.post(this.url, body, options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

}
