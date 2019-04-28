import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Personal }            from '../data/form-data.model';
import { FormDataService }     from '../data/form-data.service';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    scholar : boolean = false;
    samurdhi : boolean = false;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    scholarYes(){
      this.scholar = true;
    }
    scholarNo(){
      this.scholar = false;
    }

    samurdhiY(){
      this.samurdhi = true;
    }
    samurdhiN(){
      this.samurdhi = false;
    }
    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['ifs/work']);
        }
    }
}
