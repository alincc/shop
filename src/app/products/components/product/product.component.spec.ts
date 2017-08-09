import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterLinkStubDirective }   from '../../testing/router-stubs';
import { RouterOutletStubComponent } from '../../testing/router-stubs';
import { ProductComponent } from './product.component';
import { CartService } from '../services';
import { StorageServiceMock, StorageService } from '../../testing/StorageServiceMock';

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
        { provide: StorageService, useClass: StorageServiceMock },
      ],
      imports: [
        ToastModule.forRoot(),
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
