import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observables/rxjs-example.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentData: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsParent.subscribe(mes => {
      this.parentData = mes
    })
  }

  ngOnInit(): void {
  }

}
