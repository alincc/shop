import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import { StorageService } from './storage.service';

import { User } from '../model/interface';

@Injectable()
export class AuthService {

  public token: string;
  private auth: User = null;
  private url = 'http://localhost:9000/api/auth';

  constructor(private http: Http,
    private storageService: StorageService,
  ) {
    let user = this.getAuthedUser();
    this.token = this.storageService.getItem('token');
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
    let headers = new Headers({ 'authorization': 'Bearer ' + this.storageService.getItem('token') });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + '/userinfo', options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error));
  }

  authSuccess(token: string) {
    this.storageService.setItem('token', token);

    this.getUserInfo()
      .subscribe(userInfo => this.auth = userInfo);
  }

  getAuthedUser(): Observable<User> {
    if (!this.isAuthed()) {
      return Observable.of(null);
    }

    return this.getUserInfo();
  }

  logout(): void {
    this.token = null;
    this.storageService.removeItem('token');
  }

  authenticate(email: String, password: String): Observable<boolean> {
    return this.validate(email, password);
  }

  isAuthed(): boolean {
    return tokenNotExpired();
  }

  create(user: User): Observable<User> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);

    return this.http.post(this.url + '/register', body, options)
      .map((res: Response) => res.json().data)
      .catch((err: any) => Observable.throw(err.json().error));
  }

  update(user: any): Observable<User> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + this.storageService.getItem('token')
    });
    const options = new RequestOptions({ headers: headers });
    const body = JSON.stringify(user);

    return this.getUserInfo()
      .switchMap(data => this.http.put(this.url + '/userinfo', body, options))
      .map(res => res.json());
  }
}
