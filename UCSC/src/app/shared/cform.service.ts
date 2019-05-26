import { Injectable } from '@angular/core';

import { Marks } from './marks.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable({
  providedIn: 'root'
})
export class CformService {

  readonly baseURL = 'http://localhost:4000/marks';

  list : Marks[];
  constructor(private http:HttpClient) { }


  form : FormGroup = new FormGroup({
    _id : new FormControl(null),
    ids : new FormControl(''),
    name : new FormControl(''),
    registration : new FormControl(''),
    distance : new FormControl(0),
    income : new FormControl(0),
    parent : new FormControl(0),
    sibiling : new FormControl(0),
    marks : new FormControl(0),
    rank : new FormControl(0),
    cat1 : new FormControl(0),
    cat2 : new FormControl(0),
    status : new FormControl('Yes'),
    __v : new FormControl(0)
  });

  initializeForm(){
    this.form.setValue({
      _id : null,
      ids : '',
      name : '',
      registration : '',
      distance : 0,
      income : 0,
      parent : 0,
      sibiling : 0,
      marks : 0,
      rank : 0,
      cat1 : 0,
      cat2 : 0,
      status : 'Yes',
      __v : 0
    })
  }

  submitForm(marks:Marks){

    return this.http.put(this.baseURL+`/${marks._id}`,marks);
  }

  getForm(){
    return this.http.get(this.baseURL);
  }

  populateForm(data){
    this.form.setValue(data);
  }
}

