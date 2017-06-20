import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../model/interface';

@Injectable()
export class ProductService {
  private url = 'http://localhost:9000/api/product';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url)
                    .map(res => res.json())
                    .map(products => products.filter(product => product.active === true))
                    .catch(this.handleError);
  }

  getProduct(id: String): Observable<Product> {
    return this.http.get(this.url + '/' + id)
                    .map(res => res.json())
                    .map(product => {
                      if (product.active === false) {
                        throw Observable.throw({ message: 'No such product exists!'});
                      }
                      return product;
                    })
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    if (error.json === undefined) {
      return Observable.throw(error.error);
    }
    return Observable.throw(error.json() || 'Server error');
  }
}
