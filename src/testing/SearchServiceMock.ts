import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export { SearchService } from '../app/services';

@Injectable()
export class SearchServiceMock {

  constructor(private http: Http) { }

  search (term: string) {
    return null;
  }
}
