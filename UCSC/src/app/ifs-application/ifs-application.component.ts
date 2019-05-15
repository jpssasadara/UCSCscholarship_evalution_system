import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IfsService } from '../shared/ifs.service';
import { Ifs } from '../shared/ifs.model';
import { FormData } from '../data/form-data.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-ifs-application',
  templateUrl: './ifs-application.component.html',
  styleUrls: ['./ifs-application.component.css']
})
export class IfsApplicationComponent implements OnInit {

  ids : string;
  arr : FormData;
  
  constructor(private route: ActivatedRoute, private ifsService:IfsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ids = params.get("_id");
    });
    this.ifsService.getApplication(this.ids).subscribe((res)=>{
      this.arr = res as FormData;
      console.log(this.arr)
    });
  }

  submit(){
   this.ifsService.putForm(this.arr).subscribe((res)=>{
     console.log("Updated successfully");
   });
  }

}
