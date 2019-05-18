import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  // exports: [
  //   UsersComponent,
  //   UserdetailsComponent
  // ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UsersComponent},
      {path: ':uuid', component: UserdetailsComponent},
    ])
  ],
  // bootstrap:[UsersComponent]
})
export class UsersModule { }
