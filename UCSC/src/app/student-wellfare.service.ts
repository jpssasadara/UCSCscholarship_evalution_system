import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IViewWelfareStudent } from './viewStuWelfare';
import { HttpClient} from '@angular/common/http';
import { IRegSchointer } from './RegSchoInter';


@Injectable({
  providedIn: 'root'
})
export class StudentWellfareService {
  _url = 'http://localhost:3000/scholarship/getWelfareStu';
  _url2 = 'http://localhost:3000/scholarship/getWelfareStu/';

  constructor(private _http: HttpClient) { }

  getStudents():Observable<IViewWelfareStudent[]>{
    return this._http.get<IViewWelfareStudent[]>(this._url);
  }

  //get student application according to student id
  getApplication(StudentId:string):Observable<IRegSchointer[]>{
    return this._http.get<IRegSchointer[]>(this._url2+StudentId);
  }

}
