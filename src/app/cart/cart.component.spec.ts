import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CartService } from '../services';
import { CartServiceMock, MOCK_ITEMS, PRODUCT_NOT_IN_CART } from '../../testing/CartServiceMock';
import { ToastsManagerMock } from '../../testing/ToastsManagerMock';
import { StorageServiceMock, StorageService } from '../../testing/StorageServiceMock';
import { Product, OrderLine } from '../model/interface';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        {
          provide: CartService,
          useClass: CartServiceMock
        },
        { provide: ToastsManager, useClass: ToastsManagerMock },
        { provide: StorageService, useClass: StorageServiceMock },
      ],
      imports: [
        ToastModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('removeItem()', () => {
    it('should remove the item', () => {
      let currentItems = component.getProducts();

      if (currentItems[0] != null) {
        const itemToRemove = currentItems[0];
        const lengthBefore = component.getProducts().length;

        component.removeItem(currentItems[0]);

        expect(component.getProducts().length).toBeLessThan(lengthBefore);
        expect(component.contains(itemToRemove)).toBe(false);
      }
    });
  })

  describe('contains()', () => {
    it ('should return true if item exists', () => {
      let orderLine = component.getProducts()[0];
      expect(component.contains(orderLine)).toBe(true);
    });

    it ('should return false if item does not exists', () => {
      expect(component.contains(PRODUCT_NOT_IN_CART)).toBe(false);
    });
  });

  describe('loadProducts()', () => {
    it ('should set the products to the data from cart service', () => {
      component.loadProducts();
      expect(component.getProducts()).toBe(MOCK_ITEMS);
    });
  });

});
