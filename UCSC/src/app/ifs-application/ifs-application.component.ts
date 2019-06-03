import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IfsService } from '../shared/ifs.service';
import { Ifs } from '../shared/ifs.model';
import { FormData, fmember } from '../data/form-data.model';
import { from } from 'rxjs';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ifs-application',
  templateUrl: './ifs-application.component.html',
  styleUrls: ['./ifs-application.component.css']
})
export class IfsApplicationComponent implements OnInit {
  disabledCheck : boolean = true;
  ids : string;
  arr : FormData;
  membs : fmember[];
  constructor(private route: ActivatedRoute, private ifsService:IfsService,private tostr:ToastrService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ids = params.get("_id");
    });
    this.ifsService.getApplication(this.ids).subscribe((res)=>{
      this.arr = res as FormData;
      this.membs = this.arr.members;
      console.log(this.arr)
    });
  }

  submit(){
    this.arr.status = true;
   this.ifsService.putForm(this.arr).subscribe((res)=>{
     console.log("Updated successfully");
     this.tostr.info('<span class="now-ui-icons ui-1_bell-53"></span> Candidate&apos;s detail verification <b>completed</b> - <br/> Sent for approval.', '', {
      timeOut: 8000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-' + 'top' + '-' +  'right'
    });
   });
  }

  changeCheck(event){
    console.log(event.target.checked);
    this.disabledCheck = !event.target.checked;
  }

}
