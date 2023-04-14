import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { ManageProductsComponent } from './components/Dashboard/dashboard/manage-products/manage-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponentComponent,
    title: 'Login Page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard Page',
    children: [
      {
        path: 'manageProducts',
        component: ManageProductsComponent,
        title: `Products' Management Page`,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
