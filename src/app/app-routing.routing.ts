import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ApiCrudComponent } from './api-crud/api-crud.component';
import { FormsDemoReactiveComponent } from './forms-demo-reactive/forms-demo-reactive.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { MainParentComponent } from './parent-child-concepts/main-parent/main-parent.component';
import { ParentComponent } from './parent/parent.component';
import { ParentComponentComponent } from './rxjs-examples/parent-component/parent-component.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { UserCrudComponent } from './user-crud/user-crud.component';

const routes: Routes = [
    { path: 'forms-demo', component: FormsDemoComponent, },
    { path: 'forms-demo/:slug', component: FormsDemoComponent },
    { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
    { path: 'pipes', component: AngularPipesComponent },
    { path: 'directives', component: AngularDirectivesComponent },
    { path: 'users', component: UserCrudComponent, },
    { path: 'users/create', component: UserCrudComponent, },
    { path: 'users/edit/:editId', component: UserCrudComponent, },
    { path: 'users/delete/:deleteId', component: UserCrudComponent, },
    { path: 'students', loadChildren: () => import('./api-crud/api-crud.module').then(x => x.ApiCrudModule), },
    { path: 'parent-child', component: ParentComponent, },
    { path: 'parent-child-concepts', component: MainParentComponent, },
    { path: 'parent-child-rxjs', component: ParentComponentComponent, },
    { path: 'reactive-forms', component: FormsDemoReactiveComponent, },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }