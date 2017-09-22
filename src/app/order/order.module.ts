import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { OrderRoutingModule, routedComponents } from './order.routing';
import { OrderSelectedComponent } from './containers/order-selected.component';
import { OrderTableComponent } from './components/order-table.component';
import { OrderTicketFormComponent } from './components/order-ticket-form.component';
import { OrderComponent } from './containers/order/order.component';
import { ProductsModule } from '../products/products.module';
import { CheckoutModule } from '../checkout/checkout.module';
import { CollectionEffects } from './effects/collection';
import { OrderEffects } from './effects/order';
import { reducers } from './reducers';

@NgModule({
  imports: [
    OrderRoutingModule,
    SharedModule,
    CheckoutModule,
    ProductsModule,
    StoreModule.forFeature('orders', reducers),

    EffectsModule.forFeature([OrderEffects, CollectionEffects]),
  ],
  declarations: [
    routedComponents,
    OrderSelectedComponent,
    OrderComponent,
    OrderTableComponent,
    OrderTicketFormComponent,
  ],
  exports: [
    OrderTableComponent
  ],
  providers: [
  ]
})
export class OrderModule { }
