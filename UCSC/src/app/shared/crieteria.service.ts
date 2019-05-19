import { Injectable } from '@angular/core';
import { Crieteria,range,fincome} from './crieteria.model';
import { from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Ifs } from './ifs.model';


@Injectable({
  providedIn: 'root'
})
export class CrieteriaService {
  
  readonly baseURL = 'http://localhost:4000/crieteria';

  constructor(private http:HttpClient) { }

  postForm(form:Crieteria){
    return this.http.post(this.baseURL,form);
  }

 
/*
 _url = 'http://localhost:3000/scholarship';
  constructor(private _http: HttpClient) { }
  enroll(user: RegScho){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
    
  }
*/

  getForm(){
    return this.http.get(this.baseURL);
  }

  getApplication(id:string){
    return this.http.get(this.baseURL+`/${id}`);
  }

  putForm(form:Crieteria){
    return this.http.put(this.baseURL+`/${form._id}`,form);
  }

  deleteForm(id:string){
    return this.http.delete(this.baseURL+`${id}`);
  }
}
