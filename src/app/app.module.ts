import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { CartService,
  AuthService,
  ShippingService,
  CheckoutService,
  CategoryService,
  CustomerService,
  ProductService
} from './services';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemsComponent } from './checkout-items/checkout-items.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    CategoryListComponent,
    ContactFormComponent,
    CheckoutComponent,
    CheckoutItemsComponent,
    OrderComponent,
    LoginComponent,
    ProfileComponent,
    CheckoutFormComponent,
    RegisterComponent,
    RegisterFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    ProductService,
    CustomerService,
    CartService,
    ShippingService,
    AuthService,
    CheckoutService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
