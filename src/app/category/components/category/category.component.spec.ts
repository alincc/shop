import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CategoryService } from '../services';
import { CategoryServiceMock } from '../../testing/CategoryServiceMock';
import { ActivatedRouteStub, ActivatedRoute, RouterLinkStubDirective } from '../../testing/router-stubs';
import { CategoryComponent } from './category.component';
import { FAKE_CATEGORY1 } from '../../testing/mock/mocks';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  const activatedRoute = new ActivatedRouteStub();

  beforeEach(async(() => {
    activatedRoute.testParams = { id: "99999" };

    TestBed.configureTestingModule({
      declarations: [
        CategoryComponent,
        RouterLinkStubDirective,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: CategoryService, useClass: CategoryServiceMock },
      ],
      imports: [
        HttpModule,
      ],
    })

    TestBed.overrideComponent(CategoryComponent, {
      set: {
        template: `<p>Overridden CategoryComponent`,
      }
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(CategoryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('fetch category', () => {
    it ('should fetch and set the category', () => {
      component.ngOnInit();
      expect(component.getCategory()).toEqual(FAKE_CATEGORY1);
    });

    it ('should set errorMsg to a error message if category was not found', () => {
      activatedRoute.testParams = { id: "invalid" };
      component.ngOnInit();
      expect(component.getErrorMsg()).not.toBeUndefined();
    });

    it ('should set isFinished to true after fetching', () => {
      component.ngOnInit();
      expect(component.isFinished).toBe(true);
    });

  })
});
