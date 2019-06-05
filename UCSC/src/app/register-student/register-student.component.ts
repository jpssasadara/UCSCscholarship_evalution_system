import { Component, OnInit } from '@angular/core';
import { RegStudent } from '../RegStudent';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminRegStudentService } from '../admin-reg-student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  errorMsg;
  repassword;
  constructor( private route:ActivatedRoute , private router: Router ,private _AdminRegStudentService: AdminRegStudentService) { }
  
  userModel = new RegStudent(this.route.snapshot.paramMap.get('regNumber'),this.route.snapshot.paramMap.get('email'),"");
  ngOnInit() {
    
  }

  onSubmit(){
    if(this.repassword== this.userModel.password){
      this._AdminRegStudentService.enroll(this.userModel)
      .subscribe(
        response => console.log("Success !", response),
        error => this.errorMsg = error.statusText,
      )
      Swal.fire({
        title: 'Yes !!!  ',
        text: 'Registration is ok. An email was sent with UN & PW .... ',
        type: 'success'
      });
      this.router.navigate(['/scholarship/getWelfareStu']);

    } else{
      Swal.fire({
        title: 'Error !!!  ',
        text: 'Your password and Re password is not match ..... ',
        type: 'error'
      });

      this.userModel.password="";
      this.repassword="";
    }
   
     
//alert(this.errorMsg);
       // console.log(this.errorMsg.length);
        //this.router.navigate(['/welfare/getpdf']);
       // this.cookieService.set( 'Test', 'Hello World' );
        
       // this.cookieService.set( 'appdata', JSON.stringify(this.userModel) );
        //console.log(this.cookieService.get('appdata'));

       
      
  }

}
