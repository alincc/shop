import { TestBed, inject, async } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, HttpModule, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ShippingService } from './shipping.service';
import { MOCK_SHIPPINGS, MOCK_SHIPPING1 } from '../../testing/mock/mocks';

describe('ShippingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShippingService,

        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should be created', inject([ShippingService], (service: ShippingService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllShipping()', () => {
    it ('should get a list of all shipping types', async(inject([MockBackend, ShippingService], (backend: MockBackend, service: ShippingService) => {
      backend.connections.subscribe(
          (connection: MockConnection) => {
              connection.mockRespond(new Response(
                  new ResponseOptions({
                      body: JSON.stringify(MOCK_SHIPPINGS)
                  })));
          });

      service.getAllShipping()
        .subscribe(response => {
          expect(response).toEqual(MOCK_SHIPPINGS);
        })
    })));

    it ('should get a specific shipping', async(inject([MockBackend, ShippingService], (backend: MockBackend, service: ShippingService) => {
      backend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: JSON.stringify(MOCK_SHIPPING1)
            })
          ))
        }
      );

      service.getShipping("1")
        .subscribe(response => {
          expect(response).toEqual(MOCK_SHIPPING1);
        })
      
    })));
  });
});
