import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

  userForm: FormGroup

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: [18, [Validators.required, Validators.pattern(/^([1][8-9]|[2-5][0-9]|[6][0-5])$/)]],
      email: ['', [Validators.required, Validators.email]]
    })
    const activateRouteName = this.activatedRoute.snapshot.params.slug
    if (activateRouteName) {
      console.log(activateRouteName)
    }
  }

  ngOnInit(): void {
  }

}
