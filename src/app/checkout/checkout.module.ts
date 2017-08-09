import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { CheckoutRoutingModule, routedComponents } from './checkout.routing';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { CartComponent } from './components/cart.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { CheckoutItemsComponent } from './components/checkout-items/checkout-items.component';
import { ProductsModule } from '../products/products.module';

import { reducers } from './reducers';
import { CartEffects } from './effects/cart';

@NgModule({
  imports: [
    CheckoutRoutingModule,
    SharedModule,
    ProductsModule,
    StoreModule.forFeature('checkout', reducers),

    EffectsModule.forFeature([CartEffects]),
  ],
  declarations: [
    CartComponent,
    CheckoutComponent,
    CheckoutItemsComponent,
    CheckoutFormComponent,
    PaymentListComponent,
    routedComponents,
  ],
  exports: [
    CheckoutItemsComponent,
  ],
  providers: [
  ]
})
export class CheckoutModule { }
