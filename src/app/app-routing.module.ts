import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterWraperComponent} from './layouts/master-wraper/master-wraper.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {LoginComponent} from './components/login/login.component'
import { SubnavComponent } from './layouts/sidenav/subnav.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

  const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'employee',component:EmployeeComponent},
    { path:'employeeDetails',component:EmployeeDetailsComponent},
    {path:'master-wraper',component:MasterWraperComponent},
    {path:'subnav',component:SubnavComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


