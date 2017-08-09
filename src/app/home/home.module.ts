import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule, routedComponents } from './home.routing';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
  ],
})
export class HomeModule { }
