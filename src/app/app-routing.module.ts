import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmplistComponent} from './emplist/emplist.component'
import {DepartmentComponent} from './department/department.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
import{HomeComponent} from './home/home.component'
const routes: Routes = [{path:'emplist',component:EmplistComponent}
,{path:'',component:HomeComponent},
{path:'department',component:DepartmentComponent}


,{path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
