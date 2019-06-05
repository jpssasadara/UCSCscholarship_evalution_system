import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Get } from './getpassword';

@Injectable({
  providedIn: 'root'
})
export class GetpasswordserviService {
  
  _url= "http://localhost:3000/adminStuReg/getPassword";
  constructor(private _http:HttpClient) { }

  getPW(model:any):Observable<Get[]>{
      return this._http.post<Get[]>(this._url,model);
    
  }
  
  
}
