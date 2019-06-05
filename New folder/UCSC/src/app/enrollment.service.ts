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
  _url2 = "http://localhost:3000/scholarship/getWelfareStu/";
  constructor(private _http: HttpClient) { }

  //for enrolling
  enroll(user: RegScho){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
    
  }

  //edit enrolling
  //enrolledit(this.userModel,this.userModel.regNumber)
  enrolledit(user: RegScho,regNumber:string){
    return this._http.patch(this._url2+regNumber, user)
    .pipe(catchError(this.errorHandler))
    
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
  
}
