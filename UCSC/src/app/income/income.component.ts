
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/form-data.service';
import { Work, Personal } from '../data/form-data.model';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  title = 'What do you do?';
  workType: Work;
  form: any;
  samurdhi : string;
  scholar : string;
  sam:string;
  scholActive : boolean = false;
  samurdhiActive : boolean = false;
  person :Personal;
  fileAddView : boolean = false;
  total : number = 0;
  constructor(private router: Router, private formDataService: FormDataService) {
    
  }

  ngOnInit() {
      this.workType = this.formDataService.getWork();
      console.log('Work feature loaded!');
      this.calculate();
  }

  calculate(){
    this.total = this.workType.fannual + this.workType.fproperty + this.workType.fother;
    
  }

  scholarY(){
    this.scholActive = true;
    
 //   this.scholar = "Yes";
  }

  scholarN(){
    this.scholActive = false;
  //  this.scholar = "No";
  }

  samurdhiY(){
    this.samurdhiActive = true;
   // this.samurdhi = "Yes";
  }

  samurdhiN(){
    this.samurdhiActive = false;
  //  this.samurdhi = "No";
  }

  fileaddYes(){
    this.fileAddView = true;
  }
  fileaddNo(){
    this.fileAddView = false;
  }


  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      
      this.formDataService.setField(this.samurdhi,this.scholar);
      this.formDataService.setWork(this.workType);
      
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          // Navigate to the personal page
          this.router.navigate(['ifs/personal']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the address page
          this.router.navigate(['ifs/address']);
      }
  }
}
    