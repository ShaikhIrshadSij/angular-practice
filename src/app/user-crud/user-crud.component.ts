import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  usersArray: any = []
  users: FormGroup

  constructor(private fb: FormBuilder, private route: Router) {
    this.users = this.fb.group({
      name: ['', [Validators.required]]
    })
    this.usersArray = this.getLocalStorage()
  }

  ngOnInit(): void {
  }

  navigateToDelete(id: number) {
    this.route.navigate([`users/delete/${id}`])
  }

  setLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.usersArray))
  }

  getLocalStorage() {
    if (!localStorage.getItem('users')) return []
    return JSON.parse(localStorage.getItem('users') ?? '')
  }

  addUsers() {
    this.usersArray.push({
      ...this.users.value,
      id: this.usersArray.length + 1
    })
    this.setLocalStorage()
    this.users.reset()
  }

  deleteUser(id: number) {
    this.usersArray = this.usersArray.filter((x: any) => x.id != id)
    this.setLocalStorage()
  }

}
