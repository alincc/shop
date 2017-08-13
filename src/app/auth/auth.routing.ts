import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './containers/profile.component';
import { LoginComponent} from './containers/login/login.component';
import { RegisterPageComponent} from './containers/register-page.component';

import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthedGuard } from './guards/already-authed.guard';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [AlreadyAuthedGuard] },
  { path: 'register', component: RegisterPageComponent, canActivate: [AlreadyAuthedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

export const routedComponents = [ProfileComponent, LoginComponent, RegisterPageComponent];
