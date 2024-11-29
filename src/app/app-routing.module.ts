import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:"dashboard", canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:"home", component:HomeComponent},
    {path:"create-employee", component:CreateEmployeeComponent},
    {path:"allemployee", component:AllEmployeesComponent}
  ]},
  {path:"login", component:LoginpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
