import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ScholarshipService } from '../services/scholarship.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-admin-student-application',
  templateUrl: './admin-student-application.component.html',
  styleUrls: ['./admin-student-application.component.css']
})
export class AdminStudentApplicationComponent implements OnInit {

  headerTitle = "";
  isLoading = false;
  applicants:Array<Object>;
  idArr = [];
  emailArr = [];
  notification = "";
  form = new FormGroup({
    batch : new FormControl('', Validators.required)
  });
  constructor(private scholarshipService:ScholarshipService,private notificationService:NotificationService) { }

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
    this.isLoading = false;

    if(this.validateYear())
    {
      const academicY = this.form.get("batch").value;
      this.scholarshipService.retrieveAllApplicants(academicY).subscribe(responseData => {
        if(responseData.message==0)
        {
          this.headerTitle = "Empty";
        }
        else
        {
          this.applicants = responseData.result;
          this.isLoading = true;
          console.log(this.applicants);
        }
      });
    }
    else
    {
      alert("Batch is not in the proper format");
    }
  }

  getUserSelect(ev, index) {
    if(ev.target.checked == true) {
        this.idArr.push(ev.target.value);
        console.log(this.applicants[index]);
       // this.emailArr.push(this.applicants[index].email);
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
  }

    saveSelectedApplicants()
    {
      if(this.idArr.length>0)
      {


        this.scholarshipService.saveSelectedApplicants(this.idArr).subscribe(responseData => {
          console.log(this.idArr);
          if(responseData.message!=0)
          {
            alert("Save Successfully");

          }
          else
          {
            alert("Something wrong");

          }
        });
      }
      else
      {
        alert("Applicants aren't selected");
      }
  }

  sendNotification()
  {
    if(this.notification.length>0)
    {
    if(this.emailArr.length>0)
      {

        console.log(this.emailArr);

        this.notificationService.sendNotification(this.notification)
        .subscribe(responseData => {
          console.log(this.emailArr);
          if(responseData.message!=0)
          {
            alert("Notifications sent successfully");

          }
          else
          {
            alert("Something wrong");

          }
        });
      }
      else
      {
        alert("Applicants aren't selected");
      }
    }
    else
    {
      alert("Message field is empty");

    }

  }

}
