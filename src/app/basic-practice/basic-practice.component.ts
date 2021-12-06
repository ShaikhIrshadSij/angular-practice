import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-practice',
  templateUrl: './basic-practice.component.html',
  styleUrls: ['./basic-practice.component.css']
})
export class BasicPracticeComponent implements OnInit {
  renderSection: any = 1;
  names: string[] = ["Test", "Test", "Test", "Test", "Test", "Test", "Test", "Test"];
  constructor() { }

  ngOnInit(): void {
  }

  changeSection(id: number) {
    this.renderSection = id;
  }

}
