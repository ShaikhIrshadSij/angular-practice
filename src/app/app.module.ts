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
