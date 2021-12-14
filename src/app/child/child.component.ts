import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userName: string = ''
  @Output() requestChangeName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeName() {
    this.requestChangeName.emit('Irshad')
  }

}
