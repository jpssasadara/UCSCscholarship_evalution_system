
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/form-data.service';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  title = 'What do you do?';
  workType: string;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.workType = this.formDataService.getWork();
      console.log('Work feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
      
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
    