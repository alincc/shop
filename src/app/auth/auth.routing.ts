import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './containers/profile.component';
import { LoginComponent} from './containers/login/login.component';
import { RegisterComponent} from './containers/register/register.component';

import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthedGuard } from './guards/already-authed.guard';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [AlreadyAuthedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AlreadyAuthedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

export const routedComponents = [ProfileComponent, LoginComponent, RegisterComponent];
