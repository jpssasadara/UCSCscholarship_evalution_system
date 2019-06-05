import { Component, OnInit } from '@angular/core';
import { MarksService } from '../shared/marks.service';
import { Marks } from '../shared/marks.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@Component({
  selector: 'app-ellist',
  templateUrl: './ellist.component.html',
  styleUrls: ['./ellist.component.css']
})
export class EllistComponent implements OnInit {

  arr : Marks[];
  fin : Marks[];
  mrk : Marks;
  stmt : string;
  pword : string;
  selected : Marks;
  constructor(private service : MarksService,private ngxSmartModalService:NgxSmartModalService) { }

  ngOnInit() {
    this.mrk = {
      _id : '',
      ids : '',
      name : '',
      registration : '',
      distance : 0,
      income : 0,
      parent : 0,
      sibiling : 0,
      marks : 0,
      rank : 0,
      status : '',
      cat1 : 0,
      cat2 : 0 
    }
    this.fin = [this.mrk];
    this.service.getForm().subscribe((res)=>{
      this.arr = res as Marks[];
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].status=='Confirmed') {
          this.fin.push(this.arr[i]);
        }
        
      }
    });
  }

  QRgen(id:string,name:string){
    this.stmt = 'ID : '+id+' Name '+name;
  }

  randomeGen(){

  }

  passIndx(indx:string){
    this.service.getApplication(indx).subscribe((res)=>{
      this.selected = res as Marks;
      this.QRgen(this.selected.ids,this.selected.name);
    })
  }
}
