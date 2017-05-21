import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../model/product'

@Injectable()
export class ProductService {
  private url = 'http://localhost:9000/product'

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get(this.url + '/' + id)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
