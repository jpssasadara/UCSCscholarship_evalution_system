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
  constructor(private _studentwelfareview: StudentWellfareService) { }

  ngOnInit() {
    this._studentwelfareview.getStudents()
      .subscribe(data => this.students = data);

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
