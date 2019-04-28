import { Component, OnInit, Input }   from '@angular/core';

import { FormData }                   from '../data/form-data.model';
import { FormDataService }            from '../data/form-data.service';

import { NgForm } from '@angular/forms';
import { IfsService } from '../shared/ifs.service'
import { Ifs } from '../shared/ifs.model';
import { from } from 'rxjs';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private formDataService: FormDataService,private ifsService:IfsService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    }

    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }

    onSubmit(form?: NgForm){
      if(form.value._id==""){
        this.ifsService.postForm(form.value).subscribe((res)=>{
         
          console.log("Inserted successfully");
          
        });
      }
      else{
        this.ifsService.putForm(form.value).subscribe((res)=>{
        
          console.log("Inserted Succesfully");
        });
      }
    }
  
}
