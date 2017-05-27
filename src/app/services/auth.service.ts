import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

import { User } from '../model/interface';

@Injectable()
export class AuthService {

  public token: string;
  private auth: User = null;
  private url = 'http://localhost:9000/api/auth';

  constructor(private http: Http) {
    let user = this.getAuthedUser();
    this.token = localStorage.getItem('token');
  }

  validate(email: String, password: String): Observable<boolean> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({
      email,
      password,
    });

    return this.http.post(this.url, body, options)
      .map((res: Response) => {
        let token = res.json() && res.json().token;

        if (token) {
          this.token = token;

          this.authSuccess(token);
          return true;
        }

        return false;
      })
      .catch((err: any) => {
        return Observable.throw("Error");
      });
  }

  getUserInfo(): Observable<User> {
    let headers = new Headers({ 'authorization': 'Bearer ' + localStorage.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + '/userinfo', options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

  authSuccess(token: string) {
    localStorage.setItem('token', token);

    this.getUserInfo()
      .subscribe(userInfo => this.auth = userInfo);
  }

  getAuthedUser(): Observable<User> {
    if (!this.isAuthed()) {
      return null;
    }

    return this.getUserInfo();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
  }

  authenticate(email: String, password: String): Observable<boolean> {
    return this.validate(email, password);
  }

  isAuthed(): boolean {
    return tokenNotExpired();
  }
}
