import { PaymentService } from './../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScholarshipService } from '../services/scholarship.service';

@Component({
  selector: 'app-payment-applicant-details',
  templateUrl: './payment-applicant-details.component.html',
  styleUrls: ['./payment-applicant-details.component.css']
})
export class PaymentApplicantDetailsComponent implements OnInit {

  headerTitle = "";
  paymentHistory:Array<Object>;
  student: object;
  constructor(private route: ActivatedRoute,private scholarshipService:ScholarshipService,private paymentService: PaymentService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.scholarshipService.retrieveApplicant(id)
    .subscribe(responseData => {
     // console.log(responseData);
      if(responseData.message ==0)
        {
          // tslint:disable-next-line:quotemark
          this.headerTitle = "Something wrong , applicant details can't be loaded";
        } else {
          console.log(responseData);
          this.student = responseData.result;
          this.loadPaymentDetails(id);
        }
  });


  }

  loadPaymentDetails(id)
  {
    this.paymentService.getApplicantPaymentDetails(id)
    .subscribe(responseData => {
      console.log(responseData);
      if(responseData.message ==0)
        {
          // tslint:disable-next-line:quotemark
          this.headerTitle = "Something wrong , applicant details can't be loaded";
        } else {
          console.log(responseData);
          this.paymentHistory = responseData.result;
        }
    });
  }

  removePayment(id,index)
  {
    this.paymentService.removePayment(id)
    .subscribe(responseData => {
      console.log(responseData);
      if(responseData.message ==0)
        {
          // tslint:disable-next-line:quotemark
          this.headerTitle = "Something wrong , applicant details can't be loaded";
        } else {
          console.log(responseData);
          this.paymentHistory.splice(index,1);
         alert("Remove successfully");
        }
    });
  }



}
