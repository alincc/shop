import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  search (term: string) {
    return this.http
      .get('http://localhost:9000/api/product/search?query=' + term)
      .map((response) => response.json());
  }
}
