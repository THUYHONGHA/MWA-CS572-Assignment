import { Component } from '@angular/core';

@Component({
  selector: 'app-smart',
  template:`
    <div *ngFor="let item of listStudent">
        <app-dumb [name]="item.name" [id]="item.id" [address]="item.address"></app-dumb>
        <br>
    </div>
  `,
  styleUrls: ['./smart.component.css']
})
export class SmartComponent  {
  listStudent = [
    {
      name: 'Hong',
      id: 123,
      address: 'Plano TX, 75024'
    },
    {
      name: 'Test',
      id: 456,
      address: 'Fairfield IA, 55526'
    },
    {
      name: 'Test1',
      id: 789,
      address: 'California CA, 92606'
    }
  ]



}
