import { Component, OnInit } from '@angular/core';
import { Crieteria,range,fincome } from '../shared/crieteria.model';
import { from } from 'rxjs';
import { CrieteriaService } from '../shared/crieteria.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-crieteria',
  templateUrl: './crieteria.component.html',
  styleUrls: ['./crieteria.component.css']
})
export class CrieteriaComponent implements OnInit {
  form : any;
  crteria : Crieteria;
  d : range[];
  p : fincome[];
  dist : range;
  dist1 : range;
  dist2 : range;
  dist3 : range;
  dist4 : range;
  dist5 : range;
  parent : fincome;
  parent1 : fincome;
  parent2 : fincome;
  parent3 : fincome;
  parent4 : fincome;
  parent5 : fincome;
  count : number = 0;
  cnt:number = 0;

  distSelected : number = 0;
  parntSelected : number = 0;
  cexp : any;
  constructor(private crtService:CrieteriaService,public ngxSmartModalService: NgxSmartModalService, private toastr:ToastrService) { }

  ngOnInit() {
    this.dist = {
      index : 0,
      to:0,
      from:0,
      marks:0
    };
    this.dist1 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.dist2 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.dist3 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.dist4 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.dist5 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.d = [this.dist1,this.dist2,this.dist3,this.dist4,this.dist5];
    this.crteria = {
      _id : "",
      distance : this.d,
      parent : this.p,
      crt1 : 0,
      crt2 : 0,
      crt3 : 0,
      sibil1 : 0,
      sibil2 : 0
    };
    this.cexp = this.crtService.getApplication("5cdf73507998904a488cc219").subscribe((res)=>{
      this.crteria = res as Crieteria;
      this.d = this.crteria.distance;
      this.p = this.crteria.parent;
    });
   
    
    this.parent = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.parent1  = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.parent2 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.parent3 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.parent4 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.parent5 = {
      index : 0,
      to : 0,
      from : 0,
      marks : 0
    };
    this.p = [this.parent1,this.parent2,this.parent3,this.parent4,this.parent5];
  }
  
  passIndex(i:number){
    this.distSelected = i;
    console.log(i);
  }

  passIndx(i:number){
    this.parntSelected = i;

  }
  onSubmit(){
    this.crteria.distance = this.d;
    this.crteria.parent = this.p;
    this.crtService.postForm(this.crteria).subscribe((res)=>{
      console.log("Crieteria inserted successfilly");
    });
  }

  changeDistance(form:any){
    this.d[this.distSelected].to = this.dist.to;
    this.d[this.distSelected].from = this.dist.from;
    this.d[this.distSelected].marks = this.dist.marks;
    console.log(this.d);
  }

  addDistance(form:any){
    this.d[this.count].index = this.count;
    this.d[this.count].to = this.dist.to;
    this.d[this.count].from = this.dist.from;
    this.d[this.count].marks = this.dist.marks;
    this.count = this.count +1;
    console.log(this.d);
  }

  changeParent(form:any){
    this.p[this.parntSelected].to = this.parent.to;
    this.p[this.parntSelected].from = this.parent.from;
    this.p[this.parntSelected].marks = this.parent.marks;
    console.log(this.p);
  }


  addParent(form:any){
    console.log(this.cnt);
    this.p[this.cnt].index = this.cnt;
    this.p[this.cnt].to = this.parent.to;
    this.p[this.cnt].from = this.parent.from;
    this.p[this.cnt].marks = this.parent.marks;
    this.cnt = this.cnt +1;
    console.log(this.p);
  }

  onEdit(){
    this.crteria.distance = this.d;
    this.crteria.parent = this.p;
    this.crtService.putForm(this.crteria).subscribe((res)=>{
      console.log("Crieteria has been updated");
     this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Criteria has been <b>updated</b> - <br/> Successfully.', '', {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-info alert-with-icon",
        positionClass: 'toast-' + 'top' + '-' +  'right'
      });
      
    });
    
  }

}
