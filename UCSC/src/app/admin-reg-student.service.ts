import { Injectable } from '@angular/core';
import { RegStudent } from './RegStudent';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRegStudentService {
  _url = 'http://localhost:3000/adminStuReg/';
  constructor(private _http: HttpClient) { }

  //for enrolling
  enroll(user: RegStudent){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}




