import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-demo-reactive',
  templateUrl: './forms-demo-reactive.component.html',
  styleUrls: ['./forms-demo-reactive.component.css']
})
export class FormsDemoReactiveComponent implements OnInit {
  userForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [18, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
  }

}
