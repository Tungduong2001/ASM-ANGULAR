import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { ProductCategoryComponent } from './pages/client/product-category/product-category.component';
import { CheckoutPageComponent } from './pages/client/checkout-page/checkout-page.component';
import { ClientSignupComponent } from './pages/client/client-signup/client-signup.component';
import { ClientSigninComponent } from './pages/client/client-signin/client-signin.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { PageClientDetailComponent } from './pages/client/page-client-detail/page-client-detail.component';
import { PageClientHomeComponent } from './pages/client/page-client-home/page-client-home.component';
import { CartPageComponent } from './pages/client/cart-page/cart-page.component';
import { DecentralizationGuard } from './private/decentralization.guard';

const routes: Routes = [
  {
    path:'',
    component: ClientLayoutComponent,
    children:[
      {
        path:'',
        component:PageClientHomeComponent,
      },
      {
        path:'detail/:id',
        component:PageClientDetailComponent
      },
      {
        path:'cart',
        component: CartPageComponent
      },
      {
        path:'checkout',
        component: CheckoutPageComponent
      },
      {
        path:'category/:id',
        component:ProductCategoryComponent
      }
    ],
  },
  {
    path:'admin',
    component: AdminLayoutComponent,canActivate:[DecentralizationGuard],
    children:[
      {
        path:'category',
        component: AdminCategoryListComponent
      },
      {
        path:'products',
        children:[
          {
            path:'',
            component:AdminProductListComponent
          },
          {
            path:'create',
            component: AdminProductFormComponent
          },
          {
            path:'edit/:id',
            component:AdminProductFormComponent
          }
        ]
      }
    ]
  },
  {
    path:'signin',
    component:ClientSigninComponent
  },
  {
    path:'signup',
    component:ClientSignupComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[DecentralizationGuard]
})
export class AppRoutingModule { }
