import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IViewWelfareStudent } from './viewStuWelfare';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentWellfareService {
  _url = 'http://localhost:3000/scholarship/getWelfareStu';

  constructor(private _http: HttpClient) { }

  getStudents():Observable<IViewWelfareStudent[]>{
    return this._http.get<IViewWelfareStudent[]>(this._url);
  }
}
