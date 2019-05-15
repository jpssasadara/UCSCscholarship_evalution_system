import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IfsService } from '../shared/ifs.service';
import { Ifs } from '../shared/ifs.model';

@Component({
  selector: 'app-ifs-application',
  templateUrl: './ifs-application.component.html',
  styleUrls: ['./ifs-application.component.css']
})
export class IfsApplicationComponent implements OnInit {

  ids : string;
  arr : Ifs;
  constructor(private route: ActivatedRoute, private ifsService:IfsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ids = params.get("_id");
    });
    this.ifsService.getApplication(this.ids).subscribe((res)=>{
      this.arr = res as Ifs;
    });
  }
/*
  submit(){
    this.ifsService.putForm(arr)
  }*/
}
