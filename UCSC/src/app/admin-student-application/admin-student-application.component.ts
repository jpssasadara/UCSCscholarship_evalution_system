import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ScholarshipService } from '../services/scholarship.service';

@Component({
  selector: 'app-admin-student-application',
  templateUrl: './admin-student-application.component.html',
  styleUrls: ['./admin-student-application.component.css']
})
export class AdminStudentApplicationComponent implements OnInit {

  headerTitle = "";
  applicants:Array<Object>;
  form = new FormGroup({
    batch : new FormControl('', Validators.required)
  });
  constructor(private scholarshipService:ScholarshipService) { }

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
      this.scholarshipService.retrieveAllApplicants(academicY).subscribe(responseData => {
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
      alert("Batch is not in the proper format");
    }
  }
}
