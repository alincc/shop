import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule, routedComponents } from './contact.routing';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  imports: [
    ContactRoutingModule,
    SharedModule,
  ],
  declarations: [
    routedComponents,
    ContactFormComponent,
  ],
})
export class ContactModule { }
