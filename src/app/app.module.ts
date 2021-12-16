import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { LimitCharactersDirective } from './directives/limit-characters.directive';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.routing';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { BasicPracticeComponent } from './basic-practice/basic-practice.component';
import { BasicOperationsComponent } from './basic-operations/basic-operations.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { MainParentComponent } from './parent-child-concepts/main-parent/main-parent.component';
import { ChildOneComponent } from './parent-child-concepts/child-one/child-one.component';
import { ChildTwoComponent } from './parent-child-concepts/child-two/child-two.component';
import { ChildThreeComponent } from './parent-child-concepts/child-three/child-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsDemoComponent,
    TemplateDrivenFormsComponent,
    AngularPipesComponent,
    FilterPipePipe,
    ShortNumberPipe,
    LimitCharactersDirective,
    AngularDirectivesComponent,
    UserCrudComponent,
    ApiCrudComponent,
    BasicPracticeComponent,
    BasicOperationsComponent,
    ParentComponent,
    ChildComponent,
    CustomFilterPipe,
    MainParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
