import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Response } from '../models/response.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-api-crud',
  templateUrl: './api-crud.component.html',
  styleUrls: ['./api-crud.component.css']
})
export class ApiCrudComponent implements OnInit {
  studentData: any = []
  editStudentInfo: any = null
  userImage: any = ''
  uploadedImage: any = null
  userHobbies: any = []
  studentForm: FormGroup
  userGeneder: any = []
  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [0]
    })
  }

  updateHobby($event: any) {
    if (this.userHobbies.find((x: any) => x == $event.target.value)) {
      this.userHobbies = this.userHobbies.filter((x: any) => x != $event.target.value)
    } else {
      this.userHobbies.push($event.target.value)
    }
    console.log(this.userHobbies)
  }
  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this.crudService.getStudents().subscribe((res: Response) => {
      this.studentData = res.data
    })
  }

  deleteStudent(id: string) {
    this.crudService.deleteStudent(id).subscribe((res: any) => {
      if (res.isSuccess) {
        alert('Data deleted successfully')
        this.getStudents()
      } else {
        alert(res.message)
      }
    })
  }

  updateStudent() {
    const updated = {
      ...this.editStudentInfo,
      id: this.editStudentInfo._id,
      ...this.studentForm.value
    }
    const formData = new FormData()
    Object.keys(updated).map(x => formData.append(x, updated[x]))
    if (this.uploadedImage)
      formData.append('userImage', this.uploadedImage)
    this.crudService.updateStudent(formData).subscribe((res: any) => {
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

  handleFileInput(files: any) {
    let file = files.target.files[0];
    this.uploadedImage = file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userImage = reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  addStudent() {
    this.studentForm.value.hobbies = this.userHobbies.join(',')
    if (this.editStudentInfo) {
      this.updateStudent()
      return
    }
    const formData = new FormData()
    Object.keys(this.studentForm.value).map(x => formData.append(x, this.studentForm.value[x]))
    formData.append('userImage', this.uploadedImage)
    this.crudService.addStudent(formData).subscribe((res: any) => {
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
    if (student.hobbies) {
      this.userHobbies = student.hobbies.split(',')
    }
  }

}
