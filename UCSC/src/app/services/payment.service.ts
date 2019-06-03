import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) { }

  savePayment(paymentDate,paidAmount,paidTerm,idArr)
  {
    const obj = {
      date:paymentDate,
      //time:paymentTime,
      amount:paidAmount,
      term:paidTerm,
      idArr: JSON.stringify(idArr)
    };
    return this.http.post<{message:Number}>(this.url+'/api/payments/savePayment',obj);
  }

  getApplicantPaymentDetails(id)
  {
console.log(id);
    return this.http.post<{message:Number,result:Array<Object>}>(this.url+'/api/payments/getApplicantPayments',{id:id});
  }

  removePayment(id)
  {
        return this.http.post<{message:Number}>(this.url+'/api/payments/removePayment',{id:id});
  }
}
