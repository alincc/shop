import { TestBed, inject } from '@angular/core/testing';

import { CheckoutService } from './checkout.service';
import { Customer } from '../model/Customer';
import { Product } from '../model/product';

describe('CheckoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutService]
    });
  });

  it('should be created', inject([CheckoutService], (service: CheckoutService) => {
    expect(service).toBeTruthy();
  }));

  describe('createOrder', () => {

    it('should create an order', inject([CheckoutService], (service: CheckoutService) => {
      const customer: Customer = {
        _id: "0",
        phone: "phone",
        country: "country",
        postnumber: "postnumber",
        address: "address",
        lastname: "lastname",
        firstname: "firstname",
      }

      const item1: Product = {
        _id: "0",
        name: "name",
        description: "description",
        image: "image",
        price: 100,
      }

      const item2 = {
        _id: "1",
        name: "name2",
        description: "description2",
        image: "image2",
        price: 200,
      }

      const items = [item1, item2];
      const total = 500;

      service.createOrder(customer, items, total);

    }));

  });

});
