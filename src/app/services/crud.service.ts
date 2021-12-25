import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Response> {
    return this.http.get<Response>(`${environment.apiEndpoint}/api/user/get`)
  }

  deleteStudent(id: string) {
    return this.http.delete(`${environment.apiEndpoint}/api/student/delete?id=${id}`)
  }

  updateStudent(formData: FormData) {
    return this.http.post(`${environment.apiEndpoint}/api/user/update`, formData)
  }

  addStudent(formData: FormData) {
    return this.http.post(`${environment.apiEndpoint}/api/user/add`, formData)
  }
}
