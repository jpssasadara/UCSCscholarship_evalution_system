import { Component, OnInit } from '@angular/core';
import { IfsService } from '../shared/ifs.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ifs } from '../shared/ifs.model';
@Component({
  selector: 'app-ifs',
  templateUrl: './ifs.component.html',
  styleUrls: ['./ifs.component.css'],
  providers: [IfsService]
})
export class IfsComponent implements OnInit {

  constructor(private ifsService:IfsService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.ifsService.selectedForm = {
      _id:"",
      name:"",
      address:""
    }
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
