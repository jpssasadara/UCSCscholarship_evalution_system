import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RegScho } from '../RegScho';

@Component({
  selector: 'app-welfare-edit',
  templateUrl: './welfare-edit.component.html',
  styleUrls: ['./welfare-edit.component.css']
})
export class WelfareEditComponent implements OnInit {

  constructor(private cookieService: CookieService) { }
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

}
