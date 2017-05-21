import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { CartService } from '../services/cart.service';
import { Product } from '../model/product';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        CartService,
      ],
      imports: [
        ToastModule.forRoot()
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
});
