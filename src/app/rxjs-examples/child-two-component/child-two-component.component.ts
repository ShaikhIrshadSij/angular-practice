import { Component, OnInit } from '@angular/core';
import { RxjsExampleService } from 'src/app/observables/rxjs-example.service';

@Component({
  selector: 'app-child-two-component',
  templateUrl: './child-two-component.component.html',
  styleUrls: ['./child-two-component.component.css']
})
export class ChildTwoComponentComponent implements OnInit {

  message: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.rxJsService.subsChild2.subscribe(mes => {
      this.message = mes
    })
  }

  ngOnInit(): void {
  }

  updateParentFromTwo($event: any) {
    this.rxJsService.updateParent($event)
  }

  updateChild1FromTwo($event: any) {
    this.rxJsService.updateChild1($event)
  }

  updateChild2($event: any) {
    this.rxJsService.updateChild2($event)
  }

}
