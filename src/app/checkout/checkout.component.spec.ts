import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  CartService, CheckoutService, CustomerService, ShippingService
} from '../services';
import { ShippingServiceMock } from '../../testing/ShippingServiceMock';
import { CartProduct } from '../model/interface';
import { CheckoutComponent } from './checkout.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { CheckoutItemsComponent } from '../checkout-items/checkout-items.component';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MOCK_SHIPPINGS } from '../../testing/mock/mocks';
import { AuthService } from '../services';
import { AuthServiceMock } from '../../testing/AuthServiceMock';

const MOCK_PRODUCT_1 = {
  product: {
    _id: '1',
    category_id: '1',
    name: 'First product',
    description: 'Description',
    image: 'Image',
    price: 10,
  },
  quantity: 1
};

const MOCK_PRODUCT_2 = {
  product: {
    _id: '2',
    category_id: '1',
    name: 'Second product',
    description: 'Description',
    image: 'Image',
    price: 20,
  },
  quantity: 2
};

const MOCK_CART_ITEMS = [MOCK_PRODUCT_1, MOCK_PRODUCT_2];

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent, CheckoutItemsComponent, RouterLinkStubDirective, CheckoutFormComponent ],
      providers: [
        CartService,
        CheckoutService,
        CustomerService,
        {
          provide: ShippingService,
          useClass: ShippingServiceMock,
        },
        { provide: AuthService, useClass: AuthServiceMock },
      ],
      imports: [
        HttpModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cartService = TestBed.get(CartService);

    spyOn(cartService, 'getTotalPrice').and.returnValue(50);
    spyOn(cartService, 'getItems').and.returnValue(MOCK_CART_ITEMS);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('loadProducts()', () => {
    it ('should assign the items in cart', () => {
      component.loadProducts();
      expect(component.getProducts()).toBe(MOCK_CART_ITEMS);
    });

    it ('should call getItems() on cart service', () => {
      component.loadProducts();
      expect(cartService.getItems).toHaveBeenCalled();
    });
  });

  describe('total', () => {
    it ('should get the total value of all items', () => {
      component.setProducts(MOCK_CART_ITEMS);
      expect(component.total()).toEqual(50);
    });
  });

  describe('loadShipping()', () => {
    it ('should assign the shipping methods', () => {
      component.loadShipping();

      expect(component.getShipping()).toBe(MOCK_SHIPPINGS);
    })
  });
});
