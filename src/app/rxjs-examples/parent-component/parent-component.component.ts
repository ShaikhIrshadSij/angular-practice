import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { RxjsExampleService } from 'src/app/observables/rxjs-example.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit, OnDestroy {
  parentSub!: Subscription
  parentData: string = ''
  constructor(private rxJsService: RxjsExampleService) {
    this.parentSub = this.rxJsService.subsParent.subscribe(mes => {
      this.parentData = mes
    })
  }
  
  ngOnDestroy(): void {
    if (this.parentSub) {
      this.parentSub.unsubscribe()
    }
  }

  ngOnInit(): void {
  }

}
