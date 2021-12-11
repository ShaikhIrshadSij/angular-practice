import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations',
  templateUrl: './basic-operations.component.html',
  styleUrls: ['./basic-operations.component.css']
})
export class BasicOperationsComponent implements OnInit {
  age: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  getConditions() {
    return { 'text-danger': this.age < 5, 'text-info': this.age >= 5 && this.age <= 18 }
  }

}
