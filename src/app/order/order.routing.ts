import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './containers/order/order.component';
import { OrderViewComponent } from './containers/order-view.component';

const routes: Routes = [
  { path: 'order/:id', component: OrderViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

export const routedComponents = [OrderViewComponent];
