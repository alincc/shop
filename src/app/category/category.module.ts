import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryRoutingModule, routedComponents } from './category.routing';
import { ProductsModule } from '../products/products.module';
import { CollectionEffects } from './effects/collection';
import { CategoryEffects } from './effects/category';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CategoryRoutingModule,
    SharedModule,
    ProductsModule,

    StoreModule.forFeature('categories', reducers),

    EffectsModule.forFeature([CategoryEffects, CollectionEffects]),
  ],
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    routedComponents,
  ],
  exports: [
    CategoryComponent,
  ],
  providers: [
  ]
})
export class CategoryModule { }
