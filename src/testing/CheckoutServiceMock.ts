import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Order, OrderLine, Customer } from '../app/model/interface';
import { MOCK_ORDER1 } from './mock/mocks';

@Injectable()
export class CheckoutServiceMock {

  private url = 'http://localhost:9000/api/order';

  constructor(private http: Http) { }

  createOrder(customer: Customer, items: OrderLine[], total: number) {
    return Observable.of({
      message: 'Success Mock',
      data: {
        customer: customer,
        total: total,
        items: items,
      }
    })
  }

  getOrder(id: String): Observable<Order> {
    return Observable.of(MOCK_ORDER1);
  }


}
