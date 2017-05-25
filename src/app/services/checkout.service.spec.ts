import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CheckoutService } from './checkout.service';

describe('CheckoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [CheckoutService]
    });
  });

  it('should be created', inject([CheckoutService], (service: CheckoutService) => {
    expect(service).toBeTruthy();
  }));

});
