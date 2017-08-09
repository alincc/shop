import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCollectionComponent } from './containers/product-collection.component';
import { ProductViewComponent } from './containers/product-view.component';

const routes: Routes = [
  { path: 'products', component: ProductCollectionComponent },
  { path: 'product/:id', component: ProductViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

export const routedComponents = [ProductViewComponent, ProductCollectionComponent];
