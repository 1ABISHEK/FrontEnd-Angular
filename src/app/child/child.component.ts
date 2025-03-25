import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('parentData')
  pd:any;

  @Output()
  childValue = new EventEmitter();

  sendHiMsg(){
    this.childValue.emit("Hi Paren");
  }
}
