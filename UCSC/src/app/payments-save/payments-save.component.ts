import { ScholarshipService } from './../services/scholarship.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { NotificationService } from '../services/notification.service';
import { Scholarship } from '../models/scholarship';

@Component({
  selector: 'app-payments-save',
  templateUrl: './payments-save.component.html',
  styleUrls: ['./payments-save.component.css']
})
export class PaymentsSaveComponent implements OnInit {

  applicants:Array<Scholarship>;
  idArr = [];
  headerTitle = "";
  form = new FormGroup({
    batch : new FormControl('', Validators.required)
  });

  paymentForm = new FormGroup({
    amount : new FormControl('', Validators.required),
    term : new FormControl('',Validators.required)
  });
  constructor(private scholarshipService: ScholarshipService,private paymentService: PaymentService,private notificationService:NotificationService) { }

  ngOnInit() {
  }

  validateYear()
  {
    const academicY = (this.form.get("batch").value).split('/');
    if(academicY.length==2)
    {
      if(Number.isInteger(parseInt(academicY[0])) && Number.isInteger(parseInt(academicY[0])))
      {
        return true;
      }
    }
    return false;

  }

  getStudents()
  {
    if(this.validateYear())
    {
      const academicY = this.form.get("batch").value;
      this.scholarshipService.retrieveSelectedApplicants(academicY).subscribe(responseData => {
        if(responseData.message==0)
        {
          this.headerTitle = "Empty";
        }
        else
        {
          this.applicants = responseData.result;
          console.log(this.applicants);
        }
      });
    }
    else
    {
      alert("Payment amount is not in the proper format");
    }
  }

  isvalidAmount()
  {
    const paymentAmount = this.paymentForm.get("amount");
    console.log(paymentAmount.invalid);
    console.log("a"+!isNaN(parseInt(paymentAmount.value)));
    if(!paymentAmount.invalid)
    {
      if(!isNaN(parseInt(paymentAmount.value)))
      {
        return true;
      }
    }
    return false;

  }

  isvalidTerms()
  {
    console.log(this.paymentForm.get('term').invalid);

   return this.paymentForm.get('term').invalid;

  }

  paymentSave()
  {
    //console.log(this.idArr);
    if(!this.isvalidAmount() || this.isvalidTerms())
    {
      alert("Something wrong with amount and terms");
      return 0;
    }

    let date = new Date();
    let paymentDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    let time = date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds();
    const amount = this.paymentForm.get("amount").value;
    const term = this.paymentForm.get('term').value;
    if(this.idArr.length==0)
    {
      alert("No selected applicant");
    }
    else
    {
      this.paymentService.savePayment(date,amount,term,this.idArr).
      subscribe(responseData => {
        if(responseData.message == 0)
        {
          alert("Payment details didn't saved");
        }
        else
        {
          alert("Payment details saved");
        }
      })
    }
  }

getUserSelect(ev, index) {
  try {
    if(ev.target.checked == true) {
      this.idArr.push(ev.target.value);
      this.notificationService.setElementEmailArr(this.applicants[index].email);

  }
  else {
      // removing any entry if user unchecked any previously selected value
      for(let i = 0;i < this.idArr.length; i++) {
          if(this.idArr[i] == ev.target.value) {
              this.idArr.splice(i,1);
              this.notificationService.removeElementEmailArr(i);

          }
      }
  }
  } catch (error) {
    console.log(error);
  }

 }
}
