import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <div >Hello {{name}}</div>
    <div>Student ID: {{id}}</div>
    <div>Address: {{address}}</div>
  `,
})
export class DumbComponent {
  @Input() name;
  @Input() id;
  @Input() address;

}
