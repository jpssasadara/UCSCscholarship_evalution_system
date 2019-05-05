import { Component, OnInit } from '@angular/core';
import { StudentWellfareService } from '../student-wellfare.service';

@Component({
  selector: 'app-admin-for-welfare-schol',
  templateUrl: './admin-for-welfare-schol.component.html',
  styleUrls: ['./admin-for-welfare-schol.component.css']
})
export class AdminForWelfareScholComponent implements OnInit {
  public students = [];
  public listOfStudents: Student[];
  FatherMonth = "dffgf";

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
  constructor(private _studentwelfareview: StudentWellfareService) { }

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
  sasa() {
    this.listOfStudents = new Array(this.students.length);
    this.FatherMonth = "sasadara";
    //console.log(this.students[0]["fullName"]);

    for (var _i = 0; _i < this.students.length; _i++) {
      let emp1 = new Student();
      emp1.Distance = this.students[_i]["distance"];
      emp1.StudentId = this.students[_i]["regNumber"];
      emp1.StudentName = this.students[_i]["fullName"];
      this.listOfStudents[_i] = emp1;
      //console.log(this.listOfStudents[_i].Distance);
    }
    // sorting Algorithem SelectionSort
    for (var _r = 0; _r < this.listOfStudents.length; _r++) {
      let index = _r;
      for (var _t = _r + 1; _t < this.listOfStudents.length; _t++) {
        if (this.listOfStudents[_t].Distance < this.listOfStudents[index].Distance) {
          index = _t;
        }
      }
      let smallerNumber = this.listOfStudents[index];
      this.listOfStudents[index] = this.listOfStudents[_r];
      this.listOfStudents[_r] = smallerNumber;
    }

    for (var _r = 0; _r < this.listOfStudents.length; _r++) {
      console.log(this.listOfStudents[_r].Distance);
      
    }

  }

}

class Student {
  private _Distance: Number;
  private _StudentId: String;
  private _StudentName: String;

  public get Distance(): Number {
    return this._Distance;
  }
  public set Distance(value: Number) {
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
