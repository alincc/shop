import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { CategoryService } from '../services/category.service';
import { CategoryListComponent } from './category-list.component';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const testCategory1 = {
  id: 0,
  name: 'Category 1',
  image: 'Image',
};

const testCategory2 = {
  id: 1,
  name: 'Category 2',
  image: 'Image',
};

const testCategories = [
  this.testCategory1,
  this.testCategory2,
];

describe('CategoryListComponent', () => {
  let component: CategoryListComponent;
  let fixture: ComponentFixture<CategoryListComponent>;
  let categoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListComponent ],
      providers: [
        CategoryService,
      ],
      imports: [
        HttpModule,
      ],
    })
    .compileComponents();


  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    categoryService = TestBed.get(CategoryService);
    spyOn(categoryService, 'getCategories').and.returnValue(Observable.of(testCategories));
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('loadCategories()', () => {
    it ('should call getCategories on CategoryService', fakeAsync(() => {
      component.loadCategories();
      expect(categoryService.getCategories).toHaveBeenCalled();
    }));

    it ('should add the categories fetched', () => {
      component.loadCategories();
      expect(component.getCategories().length).toBe(2);
    });
  });
});
