import { Component, OnInit, Input }   from '@angular/core';

import { FormData, fmember }                   from '../data/form-data.model';
import { FormDataService }            from '../data/form-data.service';

import { Ifs } from '../shared/ifs.model';
import { IfsService } from '../shared/ifs.service';

@Component({
  selector: 'app-ifs-admin',
  templateUrl: './ifs-admin.component.html',
  styleUrls: ['./ifs-admin.component.css']
})
export class IfsAdminComponent implements OnInit {

  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid: boolean = false;
  ifs:Ifs;
  arr : FormData[];
  constructor(private formDataService: FormDataService, private ifsService: IfsService) {
  }

  ngOnInit() {
      //this.formData = this.formDataService.getFormData();
      this.isFormValid = this.formDataService.isFormValid();
      
      console.log('Admin IFS feature loaded!');

      this.ifsService.getForm().subscribe((res)=>{
        this.arr = res as FormData[] ;
      });

  }





}
