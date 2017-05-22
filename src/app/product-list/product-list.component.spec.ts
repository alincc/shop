import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component'
import { ProductComponent } from '../product/product.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { ProductService } from '../services/product.service'
import { CategoryService } from '../services/category.service'
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
        CategoryListComponent,
        ProductComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
      providers: [
        ProductService,
        CategoryService,
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
