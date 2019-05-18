import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GetOnlineDataService} from './service/get-online-data.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {ErrorsComponent} from './errors/errors.component';
import {GuardsComponent} from './guards/guards.component';
import {MyCanActivateGuard} from "./guards/mycanactivate.guard";


@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    GuardsComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent},
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        canActivate: [MyCanActivateGuard]
      },
      {path: 'errors', component: ErrorsComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [GetOnlineDataService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public getData: GetOnlineDataService) {
    this.getData.getOnlineData();
  }
}
