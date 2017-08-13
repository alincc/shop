import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { ShippingService } from '../services/shipping.service';
import { CollectionEffects } from './effects/collection';
import { CarrierEffects } from './effects/carrier';

import { reducers } from './reducers';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('carriers', reducers),

    EffectsModule.forFeature([CarrierEffects, CollectionEffects]),
  ],
  declarations: [
  ],
  providers: [
    ShippingService,
  ],
})
export class CarrierModule { }
