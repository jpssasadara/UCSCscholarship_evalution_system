import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  formCredentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
    console.log(this.authService.getEmail());
    this.formCredentials.patchValue({
      email: this.authService.getEmail()
    });
  }

  emailChange()
  {
    if(!this.formCredentials.get("email").invalid)
    {
    this.authService.resetEmail(this.formCredentials.get("email").value).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert("Something wrong, email didn't updated");
      }
      else
      {
        alert("Email updated");
        //this.authService.setEmail(responseData.email);
      }
    });

    }
    else
    {
      alert("Something wrong, Email field is empty");
    }
  }

  passwordChange()
  {
    if(!this.formCredentials.get("password").invalid)
    {
    this.authService.resetPassword(this.formCredentials.get("password").value).subscribe(responseData => {
      if(responseData.message==0)
      {
        alert("Something wrong, password didn't updated");
      }
      else
      {
                //this.authService.setToken(responseData.token);

        alert("Password updated");

      }
    });

    }
    else
    {
      alert("Something wrong, Email field is empty");
    }
  }
}
