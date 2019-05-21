import { Component, OnInit } from '@angular/core';
import { RegScho } from 'src/app/RegScho';
import { EnrollmentService } from '../enrollment.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.component.html',
  styleUrls: ['./welfare.component.css']
})
export class WelfareComponent implements OnInit {
  
  public fileAddView:boolean = false;
  errorMsg='';
  userModel = new RegScho('batch','Degree...','',"",'','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
  ,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
  ,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','');
  constructor(private router: Router, private _enrollmentService: EnrollmentService) { }

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
        error => this.errorMsg = error.statusText,
      )
      if(this.errorMsg ==null){
        this.router.navigate(['/welfare/getpdf']);
      }
      else{
        console.log( error =>error.statusText+"sasa");
        Swal.fire({
          title: 'error !!1! ',
          text: 'A Some required attribute has been missed please Check Again ',
          type: 'warning'
        });
      }
      
  }
}
