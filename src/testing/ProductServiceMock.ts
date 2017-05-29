import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../app/model/interface';
import { FAKE_PRODUCTS, FAKE_PRODUCT1 } from './mock/mocks';

export { ProductService } from '../app/services';

@Injectable()
export class ProductServiceMock {
  private url = 'http://localhost:9000/api/product';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return Observable.of(FAKE_PRODUCTS);
  }

  getProduct(id: String): Observable<Product> {
    return Observable.of(FAKE_PRODUCT1);
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.json() || 'Server error');
  }
}
