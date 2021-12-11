import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  useRoutes: boolean = false
  dataObj: any = {
    class: 0,
    style: 0,
    variable: 0,
    ternary: 0,
    variableStyle: 0,
  }
  variableClass: any = {}
  variableStyle: any = {}

  constructor(private route: Router) { }

  navigateToRoute(routeName: string) {
    this.route.navigate([routeName], {
      queryParams: {
        id: Math.random() * 1000
      }
    })
  }

  addClass(classType: string) {
    switch (classType) {
      case 'class':
        this.dataObj.class += 1
        break;
      case 'style':
        this.dataObj.style += 1
        break;
      case 'variable':
        this.dataObj.variable += 1
        this.variableClass = {
          'w-h-50': this.dataObj.variable > 0,
          'red': this.dataObj.variable > 2 && this.dataObj.variable <= 4,
          'blue': this.dataObj.variable > 4,
          'green': this.dataObj.variable > 5
        }
        break;
      case 'ternary':
        this.dataObj.ternary += 1
        break;
      case 'variableStyle':
        this.dataObj.variableStyle += 1
        this.variableStyle = { 'background-color': this.dataObj.variableStyle <= 2 ? 'red' : this.dataObj.variableStyle <= 4 ? 'blue' : 'green' }
        break;
    }
  }

}
