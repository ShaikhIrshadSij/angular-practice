import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observables/rxjs-example.service';

@Component({
  selector: 'app-child-one-component',
  templateUrl: './child-one-component.component.html',
  styleUrls: ['./child-one-component.component.css']
})
export class ChildOneComponentComponent implements OnInit {

  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild1.subscribe(mes => {
      this.message = mes
    })
  }

  ngOnInit(): void {
  }

  updateParent($event: any) {
    this.rxJsService.updateParent($event)
  }

  updateChild1($event: any) {
    this.rxJsService.updateChild1($event)
  }

}
