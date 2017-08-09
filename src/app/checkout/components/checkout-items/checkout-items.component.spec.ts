import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { CheckoutItemsComponent } from './checkout-items.component';

describe('CheckoutItemsComponent', () => {
  let component: CheckoutItemsComponent;
  let fixture: ComponentFixture<CheckoutItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutItemsComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
