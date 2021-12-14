import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string = 'Shaikh'
  constructor() { }

  ngOnInit(): void {
  }

  changeName($event: string) {
    this.name = $event
  }

}
