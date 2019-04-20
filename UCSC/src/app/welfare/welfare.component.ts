import { Component, OnInit } from '@angular/core';
import { RegScho } from 'src/app/RegScho';
import { EnrollmentService } from '../enrollment.service';


@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.component.html',
  styleUrls: ['./welfare.component.css']
})
export class WelfareComponent implements OnInit {
  
  public fileAddView:boolean = false;
  errorMsg='';
  userModel = new RegScho('Degree...','',"",'','','','','','');
  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit() {
  }
  fileaddYes(){
    console.log("addfile");
    this.fileAddView=true;
  }
  fileaddNo(){
    this.fileAddView=false;
  }
  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log("Success !", response),
        error => this.errorMsg = error.statusText
      )
  }
}
