import { Component, OnInit } from '@angular/core';
import { RegScho } from '../RegScho';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { StudentWellfareService } from '../student-wellfare.service';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-welfare-admin',
  templateUrl: './welfare-admin.component.html',
  styleUrls: ['./welfare-admin.component.css']
})
export class WelfareAdminComponent implements OnInit {
  public userModellist =[];
  userModel:RegScho =new RegScho('batch','Degree...','',"",'','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
  ,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
  ,'','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','');;
  id:string;
  public fileAddView:boolean = false;
  constructor(private _enrollmentService: EnrollmentService ,private router: Router , private route: ActivatedRoute,private _studentwelfareview: StudentWellfareService) { }

  ngOnInit() {
    this.id=  this.route.snapshot.paramMap.get('application');
    this._studentwelfareview.getApplication(this.id)
      .subscribe(data => this.userModellist = data);
      //this.userModel=this.userModellist[0];
      this.getdata();
  }
  fileaddYes(){
    console.log("addfile");
    this.fileAddView=true;
  }
  fileaddNo(){
    this.fileAddView=false;
  }

  getdata(){
    console.log(this.userModellist[0]);
     this.userModel=this.userModellist[0];
  }
  onSubmit(){    
  }
  //register
  createAccount(){
    this.userModel=this.userModellist[0];
    this.router.navigate(['admin/register/student', this.userModel.regNumber, this.userModel.email]);
  }
}
