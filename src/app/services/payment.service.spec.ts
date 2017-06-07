import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService],
      imports: [
        HttpModule,
      ],
    });
  });

  it('should be created', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));
});
