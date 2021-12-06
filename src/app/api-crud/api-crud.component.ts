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
  editStudentInfo: any = null
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

  deleteStudent(id: number) {
    this.http.delete(`${environment.apiEndpoint}/api/student/delete?id=${id}`).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data deleted successfully')
        this.getStudents()
      } else {
        alert(res.message)
      }
    })
  }

  updateStudent() {
    this.http.post(`${environment.apiEndpoint}/api/student/update`, {
      ...this.editStudentInfo,
      id: this.editStudentInfo._id,
      ...this.studentForm.value
    }).subscribe((res: any) => {
      if (res.isSuccess) {
        this.editStudentInfo = null
        alert('Data updated successfully')
        this.studentForm.reset()
        this.getStudents()
      } else {
        alert(res.message)
      }
    })
  }

  addStudent() {
    if (this.editStudentInfo) {
      this.updateStudent()
      return
    }
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

  editStudent(student: any) {
    this.editStudentInfo = student
    this.studentForm.patchValue({
      firstName: student.firstName,
      lastName: student.lastName,
    })
  }

}
