import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit, AfterViewInit {
  @ViewChild("userForm", { static: false }) userForm!: NgForm
  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {

  }

  submitData(form: NgForm) {
  }

}
