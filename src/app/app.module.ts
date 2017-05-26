import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { ShippingService } from './services/shipping.service';
import { CheckoutService } from './services/checkout.service';
import { CategoryService } from './services/category.service';
import { CustomerService } from './services/customer.service';
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
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    BrowserModule,
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
