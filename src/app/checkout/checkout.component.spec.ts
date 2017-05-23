import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../model/CartProduct';
import { CheckoutComponent } from './checkout.component';
import { CheckoutItemsComponent } from '../checkout-items/checkout-items.component';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';

const MOCK_PRODUCT_1 = {
  product: {
    id: 1,
    category_id: 1,
    name: "First product",
    description: "Description",
    image: "Image",
    price: 10,
  },
  quantity: 1
}

const MOCK_PRODUCT_2 = {
  product: {
    id: 2,
    category_id: 1,
    name: "Second product",
    description: "Description",
    image: "Image",
    price: 20,
  },
  quantity: 2
}

const MOCK_CART_ITEMS = [MOCK_PRODUCT_1, MOCK_PRODUCT_2];

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let cartService: CartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent, CheckoutItemsComponent, RouterLinkStubDirective ],
      providers: [
        CartService,
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
});