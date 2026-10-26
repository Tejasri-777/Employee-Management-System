import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { Home } from './home/home';
import { AddEmployee } from './add-employee/add-employee';
import { ViewEmpDetails } from './view-emp-details/view-emp-details';
import {UpdateEmployee} from './update-employee/update-employee';


export const routes: Routes = [
     { path: 'home', component: Home },
    {path:'employees',component:EmployeeList},
    {path:'add-employee',component:AddEmployee},
    {path:'update-employee/:id',component:UpdateEmployee},
  { path: 'view-employee/:id', component: ViewEmpDetails },
    {path:'',redirectTo:'home',pathMatch:'full'}
];
