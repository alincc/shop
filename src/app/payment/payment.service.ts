import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Payment } from './payment';

@Injectable()
export class PaymentService {
  private url = 'http://localhost:9000/api/payment';

  constructor(private http: Http) { }

  getActivePayments(): Observable<Payment[]> {
    return this.getAllPayments()
      .map((res: Payment[]) => res.filter((payment: Payment) => payment.active === true));
  }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.json() || 'Server error');
  }
}
