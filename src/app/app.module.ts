import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { CheckoutModule } from './checkout/checkout.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { reducers, developmentReducerFactory } from './reducers';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing/router-stubs';

import { CartService,
  ShippingService,
  CheckoutService,
  CategoryService,
  CustomerService,
  ProductService,
  SearchService,
  StorageService,
  PaymentService,
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    CategoryModule,
    CheckoutModule,
    ContactModule,
    OrderModule,
    AuthModule,
    AboutModule,
    HomeModule,
    ToastModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule,

    StoreModule.forRoot(reducers, {
      reducerFactory: developmentReducerFactory,
      // reducerFactory: !environment.production
        // ? developmentReducerFactory
        // : undefined,
    }),

    StoreDevtoolsModule.instrument(),

    EffectsModule.forRoot([]),
  ],
  providers: [
    ProductService,
    CustomerService,
    CartService,
    ShippingService,
    CheckoutService,
    CategoryService,
    SearchService,
    StorageService,
    PaymentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
