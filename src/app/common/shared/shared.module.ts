import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';
import { LimitCharactersDirective } from 'src/app/directives/limit-characters.directive';
import { CustomFilterPipe } from 'src/app/pipes/custom-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterPipePipe,
    ShortNumberPipe,
    LimitCharactersDirective,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FilterPipePipe,
    ShortNumberPipe,
    LimitCharactersDirective,
    CustomFilterPipe
  ]
})
export class SharedModule { }
