import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { from } from 'rxjs';

import { Ifs } from './ifs.model';
@Injectable({
  providedIn: 'root'
})
export class IfsService {
  shol:Ifs[];
  selectedForm : Ifs;
  readonly baseURL = 'http://localhost:4000/ifs';

  constructor(private http:HttpClient) { }

  postForm(form:Ifs){
    return this.http.post(this.baseURL,form);
  }

  getForm(){
    return this.http.get(this.baseURL);
  }

  putForm(ifs:Ifs){
    return this.http.put(this.baseURL+`/${ifs._id}`,ifs);
  }

  deleteForm(id:string){
    return this.http.delete(this.baseURL+`${id}`);
  }
}
