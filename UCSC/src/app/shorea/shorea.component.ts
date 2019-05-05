import {Component ,OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


import { IfsService } from '../shared/ifs.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ifs } from '../shared/ifs.model';



@Component({
  selector: 'app-shorea',
  templateUrl: './shorea.component.html',
  styleUrls: ['./shorea.component.css']
})
export class ShoreaComponent {
  fruits: Array<string> = ["apple", "pear", "kiwi", "banana", "grape", "strawberry", "grapefruit", "melon", "mango", "plum"];

  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  steps = [
    {label: 'Confirm your name', content: 'Last name, First name.'},
    {label: 'Confirm your contact information', content: '123-456-7890'},
    {label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV'},
    {label: 'You are now done', content: 'Finished!'}
  ];

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private _formBuilder: FormBuilder,private ifsService:IfsService) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          firstNameFormCtrl: ['', Validators.required],
          lastNameFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          emailFormCtrl: ['', Validators.email]
        }),
      ])
    });

    this.nameFormGroup = this._formBuilder.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
    });

    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.email]
    });

    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    /*
    this.ifsService.selectedForm = {
      _id:"",
      name:"",
      address:"",
      registration:"",
      course:"",
      distance:0,
      telephone:"",
      email:"",
      scholar:"",
      samurdhi:""
    }
    */
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

  onEdit(ifs:Ifs){
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
