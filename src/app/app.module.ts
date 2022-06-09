import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminNavbarComponent } from './components/admin/admin-navbar/admin-navbar.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { ClientFooterComponent } from './components/client/client-footer/client-footer.component';
import { ClientNavbarComponent } from './components/client/client-navbar/client-navbar.component';
import { PageClientDetailComponent } from './pages/client/page-client-detail/page-client-detail.component';
import { PageClientHomeComponent } from './pages/client/page-client-home/page-client-home.component';
import { ClientSigninComponent } from './pages/client/client-signin/client-signin.component';
import { ClientSignupComponent } from './pages/client/client-signup/client-signup.component';
import { CartPageComponent } from './pages/client/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/client/checkout-page/checkout-page.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CartQuantityComponent } from './components/client/cart/cart.component';

import { NgToastModule } from 'ng-angular-popup';
import { ProductCategoryComponent } from './pages/client/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProductFormComponent,
    AdminProductListComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    AdminUserListComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminNavbarComponent,
    AdminHeaderComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientNavbarComponent,
    PageClientDetailComponent,
    PageClientHomeComponent,
    ClientSigninComponent,
    ClientSignupComponent,
    CartPageComponent,
    CheckoutPageComponent,
    CartQuantityComponent,
    ProductCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
