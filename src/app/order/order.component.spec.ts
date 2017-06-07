import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { OrderComponent } from './order.component';
import { ActivatedRoute, ActivatedRouteStub } from '../../testing/router-stubs';
import { MOCK_ORDER1 } from '../../testing/mock/mocks';
import { CheckoutServiceMock } from '../../testing/CheckoutServiceMock';
import { CheckoutService } from '../services';
import { CheckoutItemsComponent } from '../checkout-items/checkout-items.component';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let routerStub;
  const activatedRoute = new ActivatedRouteStub();

  beforeEach(async(() => {
    activatedRoute.testParams = { id: 99999 };

    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      declarations: [
        OrderComponent,
        CheckoutItemsComponent,
        RouterLinkStubDirective,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: CheckoutService, useClass: CheckoutServiceMock },
      ],
      imports: [
        HttpModule
      ],
    });

    TestBed.overrideComponent(OrderComponent, {
      set: {
        template: `Overridden OrderComponent`,
      },
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(OrderComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('fetchOrder()', () => {

    // it ('should fetch the order by the id param', () => {
    //   // component.fetchOrder();
    //
    //   // expect(component.order).toEqual(MOCK_ORDER1);
    // });

  });
});
