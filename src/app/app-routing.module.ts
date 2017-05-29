import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { CartComponent} from './cart/cart.component';
import { CheckoutComponent} from './checkout/checkout.component';
import { RegisterComponent} from './register/register.component';
import { OrderComponent} from './order/order.component';
import { LoginComponent} from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AlreadyAuthedGuard } from './guards/already-authed.guard';
import { CategoryComponent } from './category/category.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'order/:id', component: OrderComponent },
  { path: 'products', component: ProductsContainerComponent },
  { path: 'login', component: LoginComponent, canActivate: [AlreadyAuthedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AlreadyAuthedGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
