import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { RouterOutletStubComponent } from '../../testing/router-stubs';
import { ProductComponent } from './product.component';
import { CartService } from '../services/cart.service';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
      providers: [
        CartService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
