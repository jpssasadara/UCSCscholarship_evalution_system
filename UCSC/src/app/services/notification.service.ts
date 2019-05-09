import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = "http://localhost:3000";
emailArr = [];
  constructor(private http: HttpClient) { }


  isEmptyemailArray()
  {
    return this.emailArr.length < 0;
  }

  setElementEmailArr(email)
  {
    this.emailArr.push(email);
  }

  removeElementEmailArr(index)
  {
    this.emailArr.splice(index,1);
  }

  sendNotification(msg:string)
  {
    return this.http.post<{message:Number}>(this.url+"/api/notification/sendNotification",{msg:msg,emailArr:JSON.stringify(this.emailArr)});
  }
}
