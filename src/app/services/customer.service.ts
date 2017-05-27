import { Injectable } from '@angular/core';
import { Customer } from '../model/interface';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  private url = 'http://localhost:9000/api/customer';

  constructor(private http: Http) { }

  create(customer: Customer): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, JSON.stringify(customer), options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

  update(id: string, customer: Customer): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.put(this.url + '/' + customer._id, JSON.stringify(customer), options)
      .map((res: Response) => res.json())
      .catch((err:any) => Observable.throw(err.json().error));
  }

}
