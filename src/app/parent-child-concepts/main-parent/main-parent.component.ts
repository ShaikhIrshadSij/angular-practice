import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.css']
})
export class MainParentComponent implements OnInit {
  parentData: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  mainParentOutput($event: any) {
    this.parentData = $event
  }

}
