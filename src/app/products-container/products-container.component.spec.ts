import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ProductsContainerComponent } from './products-container.component';
import { RouterLinkStubDirective } from '../../testing/router-stubs';
import { ProductService, ProductServiceMock } from '../../testing/ProductServiceMock';
import { CategoryService, CategoryServiceMock } from '../../testing/CategoryServiceMock';

describe('ProductsContainerComponent', () => {
  let component: ProductsContainerComponent;
  let fixture: ComponentFixture<ProductsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsContainerComponent,
        RouterLinkStubDirective,
      ],
      providers: [
        { provide: ProductService, useClass: ProductServiceMock },
      ],
      imports: [
        HttpModule,
      ],
    })

    TestBed.overrideComponent(ProductsContainerComponent, {
      set: {
        template: `<p>Overriden ProductsContainerComponent</p>`,
      }
    });

    TestBed.compileComponents().then(() => {
        let fixture = TestBed.createComponent(ProductsContainerComponent);
        fixture.detectChanges();

        component = fixture.componentInstance;
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
