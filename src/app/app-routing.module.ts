import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
const routes: Routes = [{path:'hello', component:HelloComponent},{path:'', redirectTo:'/hello',pathMatch:'full'},
{path:'User-profile', component:UserProfileComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


