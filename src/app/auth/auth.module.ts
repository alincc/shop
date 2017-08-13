import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { OrderModule } from '../order/order.module';
import { AuthRoutingModule, routedComponents } from './auth.routing';
import { RegisterFormComponent} from './components/register-form/register-form.component';
import { ProfileDetailsComponent} from './components/profile-details.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthedGuard } from './guards/already-authed.guard';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    OrderModule,

    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    ProfileDetailsComponent,
    RegisterFormComponent,
    routedComponents,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AlreadyAuthedGuard,
  ]
})
export class AuthModule { }
