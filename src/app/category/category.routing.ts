import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';

// import { ProductsContainerComponent } from './containers/products-container/products-container.component';

const routes: Routes = [
  // { path: 'products', component: ProductsContainerComponent },
  { path: 'category/:id', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }

export const routedComponents = [];
