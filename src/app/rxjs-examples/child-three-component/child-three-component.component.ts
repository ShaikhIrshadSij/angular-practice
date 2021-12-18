import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observables/rxjs-example.service';

@Component({
  selector: 'app-child-three-component',
  templateUrl: './child-three-component.component.html',
  styleUrls: ['./child-three-component.component.css']
})
export class ChildThreeComponentComponent implements OnInit {
  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild3.subscribe(mes => {
      this.message = mes
    })
  }

  ngOnInit(): void {
  }

  parent() {
    this.rxJsService.updateParent('From Child 3 for parent')
  }

  child1() {
    this.rxJsService.updateChild1('From Child 3 for child 1')
  }

  child2() {
    this.rxJsService.updateChild2('From Child 3 for child 2')
  }

}
