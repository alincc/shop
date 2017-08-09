import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule, routedComponents } from './about.routing';

@NgModule({
  imports: [
    AboutRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
  ],
})
export class AboutModule { }
