import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../common/shared/shared.module';
import { ApiCrudComponent } from './api-crud.component';
import { ApiCrudRoutingModule } from './api-crud.routing';

@NgModule({
  declarations: [ApiCrudComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApiCrudRoutingModule
  ]
})
export class ApiCrudModule { }
