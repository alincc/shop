import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../app/model/interface';
import { FAKE_CATEGORY1, FAKE_CATEGORIES } from './mock/mocks';

export { CategoryService } from '../app/services';

@Injectable()
export class CategoryServiceMock {
  private url = 'http://localhost:9000/api/category';

  constructor(private http: Http) { }

  getCategories(): Observable<Category[]> {
    return Observable.of(FAKE_CATEGORIES);
  }

  getCategory(id: String): Observable<Category> {
    if (id === 'invalid') {
      return null;
    }

    return Observable.of(FAKE_CATEGORY1);
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

    return Observable.throw(errMsg);
  }

}
