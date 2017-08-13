import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { PaymentService } from './payment.service';
import { CollectionEffects } from './effects/collection';
import { PaymentEffects } from './effects/payment';

import { reducers } from './reducers';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('payments', reducers),

    EffectsModule.forFeature([PaymentEffects, CollectionEffects]),
  ],
  declarations: [
  ],
  providers: [
    PaymentService,
  ],
})
export class PaymentModule { }
