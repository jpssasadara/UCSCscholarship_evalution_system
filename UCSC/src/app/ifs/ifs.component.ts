import { Component, OnInit, Input } from '@angular/core';
import { IfsService } from '../shared/ifs.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ifs } from '../shared/ifs.model';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormData } from '../data/form-data.model';
import { FormDataService }            from '../data/form-data.service';

@Component({
  selector: 'app-ifs',
  templateUrl: './ifs.component.html',
  styleUrls: ['./ifs.component.css'],
  providers: [IfsService]
})
export class IfsComponent implements OnInit {

  title = 'Multi-Step Wizard';
  @Input() formData;
  
  schol : Ifs[];

  constructor(private ifsService:IfsService,private formDataService: FormDataService) { }

  ngOnInit() {
    this.resetForm();
    this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
   
  }

  onSubmit(form?: NgForm){
    if(form.value._id==""){
      this.ifsService.postForm(form.value).subscribe((res)=>{
        this.resetForm(form);
        console.log("Inserted successfully");
        
      });
    }
    else{
      this.ifsService.putForm(form.value).subscribe((res)=>{
        this.resetForm(form);
        console.log("Inserted Succesfully");
      });
    }
  }

  onEdit(ifs:FormData){
    this.ifsService.selectedForm = ifs;
  }

  onDelete(id:string,form:NgForm){
    if((confirm("Are you sure you want to delete?")==true)){
      this.ifsService.deleteForm(id).subscribe((res)=>{
        this.resetForm(form);
        console.log("Deleted successfully");
      });
    }
  }



}
