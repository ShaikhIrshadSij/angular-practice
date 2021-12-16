import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  @Output() mainParentOutput = new EventEmitter<string>()
  message: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  updateParent($event: any) {
    this.mainParentOutput.emit($event)
  }

  updateChild1($event: any) {
    this.message = $event
  }

}
