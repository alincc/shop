import {TestBed, inject, tick} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions, Http, ConnectionBackend, BaseRequestOptions, RequestOptions} from '@angular/http';

import { CategoryService } from './category.service';
import { Category } from '../model/Category';

describe('CategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryService,
        {provide: RequestOptions, useClass: BaseRequestOptions},
        {provide: ConnectionBackend, useClass: MockBackend},
        Http,

      ]
    });
  });

  it('should be created', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));


  it('should get a list of categories', inject([ConnectionBackend, CategoryService],
      (backend: MockBackend, service: CategoryService) => {
         const mockResponse = [
           {
             id: 0,
             name: "Category 1",
             image: "Image"
           },
           {
             id: 1,
             name: "Category 2",
             image: "Image"
           }
         ];

          // Arrange
          let categories = null;
          backend.connections.subscribe((c: MockConnection) => {
              expect(c.request.url).toEqual('http://localhost:9000/api/category');
              c.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
          });

          // Act
          service.getCategories().subscribe((q) => {
            categories = q;
          });

          backend.verifyNoPendingRequests();
          expect(categories).toEqual(mockResponse);
      }
  ));

  it('should get a single category', inject([ConnectionBackend, CategoryService],
      (backend: MockBackend, service: CategoryService) => {
        const mockResponse = {
          id: "0",
          name: "Category 1",
          image: "Image"
        };

        // Arrange
        let category = null;
        backend.connections.subscribe((c: MockConnection) => {
            expect(c.request.url).toEqual('http://localhost:9000/api/category/1');
            c.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
        });

        // Act
        service.getCategory("1").subscribe((q) => {
          category = q;
        });

        backend.verifyNoPendingRequests();
        expect(category).toEqual(mockResponse);
      }
  ));

});
