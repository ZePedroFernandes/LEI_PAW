import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorServiceInterceptor } from './Interceptors/jwt-interceptor-service.interceptor';
import { LoginComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';


const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Product Edit' }
  }/* ,
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  } */
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorServiceInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
