import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutContainerComponent } from './containers/checkout-container.component';
import { CartContainerComponent } from './containers/cart-container.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutContainerComponent },
  { path: 'cart', component: CartContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }

export const routedComponents = [CartContainerComponent, CheckoutContainerComponent];
