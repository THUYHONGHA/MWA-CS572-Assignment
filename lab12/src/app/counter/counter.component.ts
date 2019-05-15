import {Component, EventEmitter, Input} from '@angular/core';
import {Output} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <input type="button" (click)="countMinus($event)" value="-">
  {{counterValue}}
  <input type="button" (click)="countPlus($event)" value="+">
  `
})
export class CounterComponent {
  @Input() counterValue:number = 0;
  countMinus(e) {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
  countPlus(e) {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  @Output() counterChange = new EventEmitter();
}
