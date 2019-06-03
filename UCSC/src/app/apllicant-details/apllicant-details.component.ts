import { ScholarshipService } from './../services/scholarship.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Scholarship } from '../models/scholarship';

@Component({
  selector: 'app-apllicant-details',
  templateUrl: './apllicant-details.component.html',
  styleUrls: ['./apllicant-details.component.css']
})
export class ApllicantDetailsComponent implements OnInit {

  headerTitle = "";
  regSchol: Object;
  constructor(private route: ActivatedRoute,private scholarshipService:ScholarshipService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.scholarshipService.retrieveApplicant(id)
    .subscribe(responseData => {
      console.log(responseData);
      if(responseData.message ==0)
        {
          // tslint:disable-next-line:quotemark
          this.headerTitle = "Something wrong , applicant details can't be loaded";
        } else {
          console.log(responseData);
          this.regSchol = responseData.result;
        }
  }
);

}
}
