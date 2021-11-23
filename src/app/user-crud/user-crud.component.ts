import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  usersArray: any = []
  users: FormGroup
  appState: any = {
    new: true,
    edit: false,
    delete: false
  }
  activeUser: any = null

  constructor(private fb: FormBuilder, private route: Router, private activatedRoute: ActivatedRoute) {
    this.users = this.fb.group({
      name: ['', [Validators.required]]
    })
    this.usersArray = this.getLocalStorage()
    if (this.activatedRoute.snapshot.params.editId) {
      this.appState = {
        new: false,
        edit: true,
        delete: false
      }
      this.activeUser = this.usersArray.find((x: any) => x.id == this.activatedRoute.snapshot.params.editId)
      this.users.patchValue({
        name: this.activeUser.name
      })
    } else if (this.activatedRoute.snapshot.params.deleteId) {
      this.appState = {
        new: false,
        edit: false,
        delete: true
      }
      this.activeUser = this.usersArray.find((x: any) => x.id == this.activatedRoute.snapshot.params.deleteId)
    }
  }

  ngOnInit(): void {
  }

  navigateToDelete(id: number) {
    this.route.navigate([`users/delete/${id}`])
  }

  navigateToEdit(id: number) {
    this.route.navigate([`users/edit/${id}`])
  }


  setLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.usersArray))
  }

  getLocalStorage() {
    if (!localStorage.getItem('users')) return []
    return JSON.parse(localStorage.getItem('users') ?? '')
  }

  addUsers() {
    if (this.activeUser) {
      this.updateUser()
    }
    else {
      this.usersArray.push({
        ...this.users.value,
        id: this.usersArray.length + 1
      })
      this.setLocalStorage()
      this.users.reset()
      this.route.navigate(['/users'])
    }
  }

  updateUser() {
    this.usersArray.find((x: any) => x.id == this.activeUser.id).name = this.users.get('name')?.value
    this.setLocalStorage()
    this.users.reset()
    this.route.navigate(['/users'])
  }

  deleteUser(id: number) {
    this.usersArray = this.usersArray.filter((x: any) => x.id != id)
    this.setLocalStorage()
    this.route.navigate(['/users'])
  }

}
