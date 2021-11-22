import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }