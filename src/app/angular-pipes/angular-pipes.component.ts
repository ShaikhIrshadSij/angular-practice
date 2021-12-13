import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {
  name = 'shaikh'
  todaydate = new Date()
  dataObj = {
    name: 'Test',
    value: 'data'
  }
  htmlString = '<p>Test</p>'
  userList: any = ["User 1", "User 2", "User 3", "User 4", "User 5", "User 6", "Test", "TT"];
  includeText = "User";
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor() { }

  ngOnInit(): void {
  }

}
