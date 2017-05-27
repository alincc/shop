import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../app/model/interface';
import { FAKE_USER1 } from './mock/mocks';

@Injectable()
export class AuthServiceMock {

  public token: string;
  private auth: User = null;
  private url = 'http://localhost:9000/api/auth';

  constructor(private http: Http) {

  }

  validate(email: String, password: String): Observable<boolean> {

    return Observable.of(true);
  }

  authSuccess(token: string) {
  }

  getAuthedUser(): Observable<User> {
    return Observable.of(FAKE_USER1);
  }

  logout(): void {
    this.token = null;
  }

  authenticate(email: String, password: String): Observable<User> {
    // return this.validate(email, password);
    return Observable.of(FAKE_USER1);
  }

  isAuthed(): boolean {
    // return tokenNotExpired();
    return false;
  }
}
