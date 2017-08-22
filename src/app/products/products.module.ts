import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule, routedComponents } from './products.routing';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductVariantsComponent } from './components/product-variants.component';
import { ProductSelectedComponent } from './containers/product-selected.component';
import { SharedModule } from '../shared/shared.module';
import { CollectionEffects } from './effects/collection';
import { ProductEffects } from './effects/product';
import { reducers } from './reducers';

@NgModule({
  imports: [
    ProductsRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', reducers),

    EffectsModule.forFeature([ProductEffects, CollectionEffects]),
  ],
  declarations: [
    ProductsContainerComponent,
    ProductListComponent,
    ProductSelectedComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductVariantsComponent,
    routedComponents,
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
  ],
})
export class ProductsModule { }
