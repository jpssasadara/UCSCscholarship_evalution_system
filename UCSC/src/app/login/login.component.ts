import { Component, OnInit } from '@angular/core';
import { GetpasswordserviService } from '../getpasswordservi.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute , private router: Router, private getpwservice:GetpasswordserviService) { }
  passs=[];
  RegNum;
  model1;
  ngOnInit() {
  }

  dddd(){

    console.log("sdgfdh");
    this.model1={"regNumber":this.RegNum};
    this.getpwservice.getPW(this.model1)
    .subscribe(data =>this.passs = data );
    console.log(this.passs);
    //this.reddd();
    if(this.passs["pass"]=="nipuni"){
       console.log("oook");
       Swal.fire({
        title: 'Yes !!!  ',
        text: "Hi !! " + this.RegNum,
        type: 'success'
      });
      this.router.navigate(['/studentdash']);
    }
  }
  

}
