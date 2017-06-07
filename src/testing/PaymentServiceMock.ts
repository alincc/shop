import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Payment } from '../app/model/interface';
import { FAKE_PAYMENTS } from './mock/mocks';

export { PaymentService } from '../app/services';

@Injectable()
export class PaymentServiceMock {
  private url = 'http://localhost:9000/api/payment';

  constructor(private http: Http) { }

  getActivePayments(): Observable<Payment[]> {
    return this.getAllPayments()
      .map(payments => payments.filter(payment => payment.active === true));
  }

  getAllPayments(): Observable<Payment[]> {
    return Observable.of(FAKE_PAYMENTS);
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.json() || 'Server error');
  }
}
