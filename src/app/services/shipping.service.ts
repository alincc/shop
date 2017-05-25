import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Shipping } from '../model/interface';

@Injectable()
export class ShippingService {

  private url = 'http://localhost:9000/api/shipping';

  constructor(private http: Http) { }

  getAllShipping(): Observable<Shipping[]> {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

  getShipping(id: String): Observable<Shipping> {
    return this.http.get(this.url + '/' + id)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

}
