import { Component, OnInit,AfterViewInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Address, fmember }             from '../data/form-data.model';
import { FormDataService }     from '../data/form-data.service';

import { ComponentFactoryResolver } from '@angular/core/src/render3';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  title = 'Where do you live?';
  address: Address;
  form: any;
  membs : fmember[];
  member : fmember;
  mem1 : fmember;
  mem2 : fmember;
  mem3 : fmember;
  count : number = 0;
//  married : string;
    txtActive : boolean = false;
    empActive : boolean = false;
  constructor(private router: Router, private formDataService: FormDataService,public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
      this.address = this.formDataService.getAddress();
      this.member = this.formDataService.getMember();
      console.log('Address feature loaded!');

        this.mem1 = {
            name : "",
            year : "",
            dob : "",
            school : "",
            course : "",
            registration : "",
            scholar : "",
            employed : "",
        };
        this.mem2 = {
            name : "",
            year : "",
            dob : "",
            school : "",
            course : "",
            registration : "",
            scholar : "",
            employed : ""
        };
        this.mem3 = {
            name : "",
            year : "",
            dob : "",
            school : "",
            course : "",
            registration : "",
            scholar : "",
            employed : ""
        };
        this.membs = [this.mem1,this.mem2,this.mem3];
  }

  activateTxt(){

  }
  addMember(form: any){
    console.log(this.count);
    console.log(this.membs);
    this.membs[this.count].name = this.member.name;
    this.membs[this.count].year = this.member.year;
    this.membs[this.count].dob = this.member.dob;
    this.membs[this.count].school = this.member.school;
    this.membs[this.count].course = this.member.course;
    this.membs[this.count].registration = this.member.registration;
    this.membs[this.count].scholar = this.member.scholar;
    this.membs[this.count].employed = this.member.employed;
    this.count = this.count + 1;
    console.log(this.membs);
    console.log(this.count);
    this.formDataService.setMember(this.membs);
}

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setAddress(this.address);
      this.formDataService.setMember(this.membs);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['ifs/work']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the result page
          this.router.navigate(['ifs/result']);
      }
  }

  ngAfterViewInit() {
    const obj: Object = {
      prop1: 'test',
      prop2: true,
      prop3: [{a: 'a', b: 'b'}, {c: 'c', d: 'd'}],
      prop4: 327652175423
    };

    this.ngxSmartModalService.setModalData(obj, 'myModal');
  }

  activateYes(){
      this.txtActive = true;
  }

  activateNo(){
      this.txtActive = false;
  }

  employedYes(){
    this.empActive = true;
  }

  employedNo(){
      this.empActive = false;
  }

}
