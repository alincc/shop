import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

import { User } from '../app/model/interface';
import { FAKE_USER1 } from './mock/mocks';

@Injectable()
export class AuthServiceMock {

  public token: string;
  private auth: User = null;
  private url = 'http://localhost:9000/api/auth';
  // private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) {
    // let user = JSON.parse(localStorage.getItem('user'));
    // this.token = user && user.token;
  }

  validate(email: String, password: String): Observable<User> {

    return Observable.of(FAKE_USER1);
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // const options = new RequestOptions({ headers: headers });
    //
    // let body = JSON.stringify({
    //   email,
    //   password,
    // });
    //
    // return this.http.post(this.url, body, options)
    //   .map((res: Response) => {
    //     let token = res.json() && res.json().body.token;
    //
    //     if (token) {
    //       this.token = token;
    //
    //       this.authSuccess(token);
    //
    //     }
    //     this.auth = res.json();
    //   })
    //   .catch((err: any) => Observable.throw(err.json().error));
  }

  authSuccess(token: string) {
    // localStorage.setItem('token', JSON.stringify(token));
    // this.auth = this.jwtHelper.decodeToken(token);
  }

  getAuthedUser(): User {
    // let token = localStorage.getItem('token');
    // return this.jwtHelper.decodeToken(token);
    return FAKE_USER1;
  }

  logout(): void {
    this.token = null;
    // localStorage.removeItem('token');
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
