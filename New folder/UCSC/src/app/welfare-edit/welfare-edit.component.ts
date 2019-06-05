import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RegScho } from '../RegScho';
import { EnrollmentService } from '../enrollment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welfare-edit',
  templateUrl: './welfare-edit.component.html',
  styleUrls: ['./welfare-edit.component.css']
})
export class WelfareEditComponent implements OnInit {

  constructor(private router: Router ,private cookieService: CookieService,private _enrollmentService: EnrollmentService) { }
  errorMsg='';
  message;
  appdata;
  public userModellist =[];
  userModel:RegScho;
  id:string;
  public fileAddView:boolean = false;
  ngOnInit() {
    this.message=this.cookieService.get('Test');
    this.appdata=this.cookieService.get('appdata');
    this.userModel=<RegScho>JSON.parse(this.cookieService.get('appdata'));

  }

  onSubmit(){
   
   
    this._enrollmentService.enrolledit(this.userModel,this.userModel.regNumber)
    .subscribe(
      response => console.log("Success !", response),
      error => this.errorMsg = error.statusText,
    )
    if(this.errorMsg != null){
      console.log(this.errorMsg.length);
      this.router.navigate(['/welfare/getpdf']);
      this.cookieService.set( 'Test', 'Hello World' );
      
      this.cookieService.set( 'appdata', JSON.stringify(this.userModel) );
      //console.log(this.cookieService.get('appdata'));
    }
    else{
      console.log( error =>error.statusText+"sasa");
      Swal.fire({
        title: 'error !! ',
        text: 'A Some required attribute has been missed please Check Again ',
        type: 'warning'
      });
    }
    
  }

}
