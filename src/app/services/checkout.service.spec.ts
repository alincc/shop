import { TestBed, inject, async } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, HttpModule, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MOCK_ORDER1} from '../../testing/mock/mocks';
import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        CheckoutService,

        MockBackend,
        BaseRequestOptions,
        {
            provide: Http,
            useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
                return new Http(backend, options);
            },
            deps: [MockBackend, BaseRequestOptions],
        }
      ]
    });
  });

  it('should be created', inject([CheckoutService], (service: CheckoutService) => {
    expect(service).toBeTruthy();
  }));

  describe('getOrder()', () => {
    it ('should get the order as an observable', async(inject([MockBackend, CheckoutService], (backend: MockBackend, service) => {
      backend.connections.subscribe(
          (connection: MockConnection) => {
              connection.mockRespond(new Response(
                  new ResponseOptions({
                      body: JSON.stringify(MOCK_ORDER1)
                  })));
          });

      service.getOrder()
        .map(data => {
          expect(data._id).toEqual(MOCK_ORDER1._id);
          expect(data.customer).toEqual(MOCK_ORDER1.customer);
          expect(data.total).toEqual(MOCK_ORDER1.total);
          expect(data.items).toEqual(MOCK_ORDER1.items);
        });

    })));
  });

});
