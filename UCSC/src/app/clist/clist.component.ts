import { Component, OnInit } from '@angular/core';
import { CrieteriaService } from '../shared/crieteria.service';
import { FormData } from '../data/form-data.model';
import { IfsService } from '../shared/ifs.service';
import { Crieteria } from '../shared/crieteria.model';
@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.css']
})
export class ClistComponent implements OnInit {

  cndidte : FormData;
  arr : FormData[];
  alist : FormData[];
  j : number = 0;
  nObj : FormData;
  constructor(private crtService:CrieteriaService, private ifsService:IfsService) { }

  ngOnInit() {
  this.nObj = {
    _id : "",
    fullName: "",
    registration : "",
    email: "",
    course: "",
    address: "",
    distance: 0,
    telephone: "",
    scholar:"",
    samurdhi : "",
    reason : "",
    work : "",
    

   
    nfather : "",
    fliving :  'Yes',
    fage : "",
    foccupation : "",
    faddress : "",
    fannual : 0,
    fproperty : 0,
    fother : 0,
    ftotal : 0,
    ftax :"",
    nmother : "",
    mliving: 'Yes',
    mage : "",
    moccupation : "",
    maddress : "",
    mannual : 0,
    mproperty : 0,
    mother : 0,
    mtotal : 0,
    mtax :"",

    net : 0,
    //new :"",

    married :"",
    dom :"",
    nspouse :"",
    employed :"",
    empdetails :"",

    members : [],

    status :false,
    gpa : 0

  }
  this.arr = [this.nObj];
  this.ifsService.getForm().subscribe((res)=>{
    this.alist = res as FormData[];
   for (let i = 0; i < this.alist.length; i++) {
    if (this.alist[i].status) {
      this.arr.push(this.alist[i]);
    }
     
   }
   console.log(this.arr);
   
});
  }
}