import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Shipping } from '../app/model/interface';
import { MOCK_SHIPPINGS, MOCK_SHIPPING1 } from './mock/mocks';

@Injectable()
export class ShippingServiceMock {

  private url = 'http://localhost:9000/api/customer';

  constructor(private http: Http) { }

  getAllShipping(): Observable<Shipping[]> {
    return Observable.of(MOCK_SHIPPINGS);
  }

  getShipping(id: String): Observable<Shipping> {
    return Observable.of(MOCK_SHIPPING1);
  }

}
