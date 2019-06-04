import { Component, OnInit } from '@angular/core';
import { RegStudent } from '../RegStudent';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminRegStudentService } from '../admin-reg-student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  errorMsg;
  constructor( private route:ActivatedRoute ,private _AdminRegStudentService: AdminRegStudentService) { }
  
  userModel = new RegStudent(this.route.snapshot.paramMap.get('regNumber'),this.route.snapshot.paramMap.get('email'),"");
  ngOnInit() {
    
  }

  onSubmit(){
    
    this._AdminRegStudentService.enroll(this.userModel)
      .subscribe(
        response => console.log("Success !", response),
        error => this.errorMsg = error.statusText,
      )
     
//alert(this.errorMsg);
       // console.log(this.errorMsg.length);
        //this.router.navigate(['/welfare/getpdf']);
       // this.cookieService.set( 'Test', 'Hello World' );
        
       // this.cookieService.set( 'appdata', JSON.stringify(this.userModel) );
        //console.log(this.cookieService.get('appdata'));

        Swal.fire({
          title: 'Yes !!!  ',
          text: 'Registration is ok. An email was sent with UN & PW .... ',
          type: 'success'
        });
      
      
  }

}
