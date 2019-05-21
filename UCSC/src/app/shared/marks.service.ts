import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marks } from './marks.model';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  readonly baseURL = 'http://localhost:4000/marks';

  constructor(private http:HttpClient) { }

  postForm(form:Marks){
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

  putForm(form:Marks){
    return this.http.put(this.baseURL+`/${form._id}`,form);
  }

  deleteForm(id:string){
    return this.http.delete(this.baseURL+`${id}`);
  }
}

