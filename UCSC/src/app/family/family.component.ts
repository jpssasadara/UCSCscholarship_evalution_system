import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Address }             from '../data/form-data.model';
import { FormDataService }     from '../data/form-data.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  title = 'Where do you live?';
  address: Address;
  form: any;
  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.address = this.formDataService.getAddress();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setAddress(this.address);
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
}
