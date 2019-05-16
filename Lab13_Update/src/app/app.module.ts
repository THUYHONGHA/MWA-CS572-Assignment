import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { IsVisibleDirective} from "./util/isVisible";
import { MakeBiggerDirective } from './util/make-bigger.directive';
import { MultiPipe } from './util/multi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    MakeBiggerDirective,
    MultiPipe,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
