import { authGuard } from './shared/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeeComponent } from './components/homee/homee.component';
import { CartComponent } from './components/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { LayoutblankComponent } from './components/layoutblank/layoutblank.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutauthComponent } from './components/layoutauth/layoutauth.component';

import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { WhislistComponent } from './components/whislist/whislist.component';

const routes: Routes = [
  {path:"",canActivate:[authGuard],component:LayoutblankComponent,children:[
    {  path:"",redirectTo:'home',pathMatch:'full'},
    {  path:"cart",component:CartComponent},
    {  path:"home",component:HomeeComponent},
    {  path:"products",component:ProductsComponent},
    {  path:"categories",component:CategoriesComponent},
    {  path:"brands",component:BrandsComponent},
    {  path:"allorders",component:AllordersComponent}, 
    {path:"checkout/:id",component:CheckoutComponent},
    {path:"details/:id",component:DetailsComponent},
   
    {path:"wishlist",component:WhislistComponent}
  ]},

  {path:"",component:LayoutauthComponent,children:[
    {  path:"login",component:LoginComponent},
    {  path:"register",component:RegisterComponent},
    
    {  path:"forget",component:ForgetpasswordComponent},
  ]},
 {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
