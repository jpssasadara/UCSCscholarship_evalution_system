import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig,MatToolbarModule} from '@angular/material';
import { Marks } from '../shared/marks.model';
import { CformService } from '../shared/cform.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-cform',
  templateUrl: './cform.component.html',
  styleUrls: ['./cform.component.css']
})
export class CformComponent implements OnInit {

  list : Marks[];
  cndidate : FormData[];
  constructor(private service:CformService,public dialogReg:MatDialogRef<CformComponent>) { }

  ngOnInit() {
    this.service.getForm().subscribe((res)=>{
      this.list = res as Marks[];
    });
  }

  onSubmit(){
    this.service.form.patchValue({
      status : "Confirmed"
    });
    
    this.service.submitForm(this.service.form.value).subscribe((res)=>{
      console.log("Submitted successfully");
      console.log(this.service.form.value);
      this.service.initializeForm();
      this.onClose();
    });
    

  }

  rejectR(){
    this.service.form.patchValue({
      status : "Rejected"
    });
    this.service.submitForm(this.service.form.value).subscribe((res)=>{
      console.log("Rejected successfully");
    })
  }

  onClose(){
    this.service.initializeForm();
    this.dialogReg.close();
  }
}
