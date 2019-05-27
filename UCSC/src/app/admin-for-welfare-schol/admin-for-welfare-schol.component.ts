import { Component, OnInit } from '@angular/core';
import { StudentWellfareService } from '../student-wellfare.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-for-welfare-schol',
  templateUrl: './admin-for-welfare-schol.component.html',
  styleUrls: ['./admin-for-welfare-schol.component.css']
})
export class AdminForWelfareScholComponent implements OnInit {
  public students = [];
  public listOfStudents: Student[];
  public listOfStudentsfinal: Student[];
  FatherMonth = "dffgf";
  public application=[];
  searchText = "Batch Number";

  //initialization of default marks 
  distance1= 0 ;
  distance2 = 0;
  distance3= 0 ;
  distance4 = 0;
  distance5 = 0;
  distance6 = 0;
  Income1 = 0;
  Income2 = 0;
  Income3 = 0; 
  Income4 = 0;
  Income5 = 0;
  Income6 = 0;
  special1 = 0;
  special2 = 0;
  special3 = 0;
  special4 = 0;
  special5 = 0;
  special6 = 0;
  special7 = 0;
  constructor(private router: Router , private _studentwelfareview: StudentWellfareService) { }

  ngOnInit() {
    this._studentwelfareview.getStudents()
      .subscribe(data => this.students = data);
      
  }
  //initialization of default marks 
  setDefault(){
    this.distance1 = 55;
    this.distance2 = 50;
    this.distance3 = 45;
    this.distance4 = 40;
    this.distance5 = 35;
    this.distance6 = 30;
    this.Income1 = 25;
    this.Income2 = 20;
    this.Income3 = 15; 
    this.Income4 = 10;
    this.Income5 = 7;
    this.Income6 = 5;
    this.special1 = 10;
    this.special2 = 7;
    this.special3 = 5;
    this.special4 = 5;
    this.special5 = 10;
    this.special6 = 3.5;
    this.special7 = 7;
  }
  //Clear Values
  clearAll(){
    this.distance1 = 0;
    this.distance2 = 0;
    this.distance3 = 0;
    this.distance4 = 0;
    this.distance5 = 0;
    this.distance6 = 0;
    this.Income1 = 0;
    this.Income2 = 0;
    this.Income3 = 0; 
    this.Income4 = 0;
    this.Income5 = 0;
    this.Income6 = 0;
    this.special1 = 0;
    this.special2 = 0;
    this.special3 = 0;
    this.special4 = 0;
    this.special5 = 0;
    this.special6 = 0;
    this.special7 = 0;
  }
  finalMarkCalcuator( distance: any, Samurdhi: string, FatherMotherTotalIncome:string,FatherLiving:string,MotherLiving:string,FatherEmployee:string,MotherEmployee:string ){
      let finalMark=0;
      //Distance 
      if(parseInt(distance,10)>=200){
        finalMark+=this.distance1;
      }else if(parseInt(distance,10)>=150){
        finalMark+=this.distance2;
      }else if(parseInt(distance,10)>=100){
        finalMark+=this.distance3;
      }else if(parseInt(distance,10)>=70){
        finalMark+=this.distance4;
      }else if(parseInt(distance,10)>=40){
        finalMark+=this.distance5;
      }else if(parseInt(distance,10)>=30){
        finalMark+=this.distance6;
      }else{
        finalMark+=0;
      }
      //Income Level
      if(parseInt(FatherMotherTotalIncome,10)>400000){
        finalMark+= this.Income6;
      }else if(parseInt(FatherMotherTotalIncome,10)>300000){
        finalMark+= this.Income5;
      }else if(parseInt(FatherMotherTotalIncome,10)>200000){
        finalMark+= this.Income4;
      }else if(parseInt(FatherMotherTotalIncome,10)>100000){
        finalMark+= this.Income3;
      }else if(parseInt(FatherMotherTotalIncome,10)>50000){
        finalMark+= this.Income2;
      }else{
        finalMark+=0;
      }
      //Samurdhi Recipient
      if(Samurdhi=="Yes"){
        finalMark+=this.Income1;
      }else{
        finalMark+=0;
      }
      //FatherLiving,MotherLiving,FatherEmployee,MotherEmployee
      if(FatherLiving=="No" && MotherLiving=="No"){
        finalMark+=this.special1;
      }else if(FatherLiving=="No" || MotherLiving=="No"){
        finalMark+=this.special2;
      }
      if(FatherEmployee=="" || MotherEmployee==""){
        finalMark+=this.special3;
      }
      else{
        finalMark+=0;
      }
      return finalMark;
  }
  sasa() {
    this.listOfStudentsfinal=null;
    if(this.searchText=="Batch Number" || this.searchText==null){
      Swal.fire({
        title: 'Warning !! ',
        text: 'Could you please select batch number ... ',
        type: 'warning'
      });
    }else{
      
    this.listOfStudents = new Array(this.students.length);
    this.FatherMonth = "sasadara";
    //console.log(this.students[0]["fullName"]);

    for (var _i = 0; _i < this.students.length; _i++) {
      let emp1 = new Student();
      //emp1.Distance = this.students[_i]["distance"];
      emp1.Distance=this.finalMarkCalcuator( this.students[_i]["distance"],this.students[_i]["Samurdhi"],this.students[_i]["FatherMotherTotalIncome"],this.students[_i]["FatherLiving"],this.students[_i]["MotherLiving"],this.students[_i]["FatherEmployee"],this.students[_i]["MotherEmployee:string"] );
      emp1.StudentId = this.students[_i]["_id"];
      emp1.StudentName = this.students[_i]["fullName"];
      emp1.batch = this.students[_i]["batch"];
      this.listOfStudents[_i] = emp1;
      //console.log(this.listOfStudents[_i].Distance);
    }
    // sorting Algorithem SelectionSort
    for (var _r = 0; _r < this.listOfStudents.length; _r++) {
      let index = _r;
      for (var _t = _r + 1; _t < this.listOfStudents.length; _t++) {
        if (parseInt(this.listOfStudents[_t].Distance,10) < parseInt(this.listOfStudents[index].Distance,10)) {
          index = _t;
        }
      }
      let smallerNumber = this.listOfStudents[index];
      
      this.listOfStudents[index] = this.listOfStudents[_r];
      this.listOfStudents[_r] = smallerNumber;
    }
    this.listOfStudentsfinal = new Array();
    for (var _rr = 0; _rr < this.listOfStudents.length; _rr++) {
      console.log(this.listOfStudents[_rr].Distance);
      if(this.searchText==this.listOfStudents[_rr].batch){
        console.log(this.listOfStudents[_rr].Distance+" "+this.searchText+" "+this.listOfStudents[_rr].batch);
        this.listOfStudentsfinal.push(this.listOfStudents[_rr]);
      }
      
    }
    }
    

  }
  // View selected Student data
  viewprofile(StudentId:string){
    
      this.router.navigate(['/admin/welfare/app',StudentId]);
  }

  //Delete profile
  deleteprofile(StudentId:string){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      //------------OUR CODE HRARE -----------------------
      this._studentwelfareview.deleteApplication(StudentId)
      .subscribe(
        response => console.log("Success !", response),
        error => console.log("hi error can not delete",error),
      )

      this._studentwelfareview.getStudents()
      .subscribe(data => this.students = data);
      //----------------------------------------------------
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

    

      
  }

}

class Student {
  private _Distance: any;
  private _StudentId: String;
  private _StudentName: String;
  private _batch: String;
  public get batch(): String {
    return this._batch;
  }
  public set batch(value: String) {
    this._batch = value;
  }

  public get Distance(): any {
    return this._Distance;
  }
  public set Distance(value: any) {
    this._Distance = value;
  }

  public get StudentId(): String {
    return this._StudentId;
  }
  public set StudentId(value: String) {
    this._StudentId = value;
  }

  public get StudentName(): String {
    return this._StudentName;
  }
  public set StudentName(value: String) {
    this._StudentName = value;
  }

}
