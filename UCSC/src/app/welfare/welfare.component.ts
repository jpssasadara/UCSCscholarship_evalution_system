import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.component.html',
  styleUrls: ['./welfare.component.css']
})
export class WelfareComponent implements OnInit {
  
  public fileAddView:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  fileaddYes(){
    console.log("addfile");
    this.fileAddView=true;
  }
  fileaddNo(){
    this.fileAddView=false;
  }
}
