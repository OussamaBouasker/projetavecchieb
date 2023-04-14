import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/Dashboard/navbar/navbar.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ManageProductsComponent } from './components/Dashboard/dashboard/manage-products/manage-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
