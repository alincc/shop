import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CategoryService } from '../services/category.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Rx';

import { ProductListComponent } from '../product-list/product-list.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent} from '../contact/contact.component';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { RouterOutletStubComponent } from '../../testing/router-stubs';
import { ActivatedRoute, ActivatedRouteStub } from '../../testing/router-stubs';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let routerStub;
  let activatedRoute = new ActivatedRouteStub();
  let categoryService: CategoryService;

  let MOCK_CATEGORY = {
    id: 0,
    name: "Category 1",
    image: "Image",
  };

  beforeEach(async(() => {
    activatedRoute.testParams = { id: 99999 }

    routerStub = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailsComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent,
      ],
      imports: [
        HttpModule,
        ToastModule.forRoot(),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        ProductService,
        CartService,
        CategoryService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    categoryService = TestBed.get(CategoryService);
    spyOn(categoryService, 'getCategory').and.returnValue(Observable.of(MOCK_CATEGORY));
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('getProductCategory()', () => {
    it ('should get the product category', () => {
      component.getProductCategory(1);
      expect(component.category).toBe(MOCK_CATEGORY);
    });
  });
});
