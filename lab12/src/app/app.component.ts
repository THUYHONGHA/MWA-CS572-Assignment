import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  componentCounterValue: number
  onChangeCounter(counterComp: number){
    return this.componentCounterValue = counterComp;
  }
}
