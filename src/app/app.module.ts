import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeeComponent } from './components/homee/homee.component';
import { LayoutauthComponent } from './components/layoutauth/layoutauth.component';
import { LayoutblankComponent } from './components/layoutblank/layoutblank.component';
import { LoginComponent } from './components/login/login.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { WhislistComponent } from './components/whislist/whislist.component';
import { SerchPipe } from './serch.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './loading.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AllordersComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    CheckoutComponent,
    DetailsComponent,
    FooterComponent,
    ForgetpasswordComponent,
    HomeeComponent,
    LayoutauthComponent,
    LayoutblankComponent,
    LoginComponent,
    NavAuthComponent,
    NavBlankComponent,
    NotfoundComponent,
    ProductsComponent,
    RegisterComponent,
    WhislistComponent,
    SerchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
