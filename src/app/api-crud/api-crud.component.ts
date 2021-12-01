import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-api-crud',
  templateUrl: './api-crud.component.html',
  styleUrls: ['./api-crud.component.css']
})
export class ApiCrudComponent implements OnInit {
  studentData: any = []
  studentForm: FormGroup
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [0]
    })
  }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.http.get(`${environment.apiEndpoint}/api/student/get`).subscribe((res: any) => {
      this.studentData = res.data
    })
  }

  addStudent() {
    this.http.post(`${environment.apiEndpoint}/api/student/add`, this.studentForm.value).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data added successfully')
        this.studentForm.reset()
        this.getStudents()
      } else {
        alert(res.message)
      }
    })
  }

}
