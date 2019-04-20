import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RegScho } from './RegScho';
import { catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3000/scholarship';
  constructor(private _http: HttpClient) { }
  enroll(user: RegScho){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
    
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  
}
