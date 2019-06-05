import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.css']
})
export class HtmltopdfComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  edit(){
    this.router.navigate(['/welfare/edit']);
  }
}
