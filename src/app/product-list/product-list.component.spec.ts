import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Product } from '../product';
import { ProductListComponent } from './product-list.component'
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../services/product.service'
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { RouterOutletStubComponent } from '../../testing/router-stubs';
import { HttpModule } from '@angular/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      declarations: [
        ProductListComponent,
        ProductComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
      providers: [
        ProductService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
