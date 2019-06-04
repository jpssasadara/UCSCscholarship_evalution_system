import { Component, OnInit } from '@angular/core';
import { RegStudent } from '../RegStudent';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor( private route:ActivatedRoute) { }
  
  userModel = new RegStudent(this.route.snapshot.paramMap.get('regNumber'),this.route.snapshot.paramMap.get('email'),"");
  ngOnInit() {
    
  }

}
