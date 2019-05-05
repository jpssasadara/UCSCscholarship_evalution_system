import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/form-data.model';
import { FormDataService }            from '../data/form-data.service';

import { Ifs } from '../shared/ifs.model';
import { IfsService } from '../shared/ifs.service';
@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    ifs:Ifs;
    constructor(private formDataService: FormDataService, private ifsService: IfsService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        
        console.log('Result feature loaded!');
    }

    submit() {
        alert('Excellent Job!');
      /*  this.ifs.name = this.formData.fullName;
        this.ifs.registration = this.formData.registration;
        this.ifs.course = this.formData.course;
        this.ifs.address = this.formData.address;
        this.ifs.distance = this.formData.distance;
        this.ifs.telephone = this.formData.telephone;
        this.ifs.email = this.formData.email;
        this.ifs.scholar = false;
        this.ifs.samurdhi = false;
        this.save(this.ifs);
       // this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;*/
      this.ifsService.postForm(this.formData).subscribe((res)=>{
        console.log("Inserted successfully");
      });
    }

    
}
