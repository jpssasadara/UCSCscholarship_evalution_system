import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormData,
  fmember
} from '../data/form-data.model';
import {
  ActivatedRoute
} from '@angular/router';
import {
  IfsService
} from '../shared/ifs.service';
import {
  CrieteriaService
} from '../shared/crieteria.service';
import {
  Crieteria
} from '../shared/crieteria.model';
import {
  MarksService
} from '../shared/marks.service';
import {
  Marks,
  sibiling
} from '../shared/marks.model';
import {
  range,
  fincome
} from '../data/crieteria-data.model';
import {
  NgForm
} from '@angular/forms';
@Component({
  selector: 'app-citems',
  templateUrl: './citems.component.html',
  styleUrls: ['./citems.component.css']
})
export class CitemsComponent implements OnInit {

   candiate: FormData;
  ids: string;
  crt: Crieteria;
  mForm: Marks;
  public mrk1: number = 0;
  mrk2: number;
  mrk3: number;
  mrk4: number;
  mrk5: number;
  dists: range[];
  incm: fincome[];
  total: number;
  public range1: string = "";
  public range2: string = "";
  state: string = "";
  sibil: fmember[];
  cat1: number = 0;
  cat2: number = 0;
  sibilng: sibiling;
  fin1 : number = 0;
  fin2 : number = 0;
  constructor(private route: ActivatedRoute, private ifsService: IfsService, private crtService: CrieteriaService, private marks: MarksService) {

  }

  ngOnInit() {

    this.mForm = {
      _id : "",
      ids : "",
      name : "",
      registration : "",
      distance : 0,
      income : 0,
      parent : 0,
      sibiling : 0,
      marks : 0,
      rank : 0,
      cat1 : 0,
      cat2 : 0,
      status : "No"
    }
    this.sibilng = {
      cat1: "",
      cat2: "",
      count1: 0,
      count2: 0,
    }
    this.route.paramMap.subscribe(params => {
      this.ids = params.get("_id");
    });
    this.ifsService.getApplication(this.ids).subscribe((res) => {
      this.candiate = res as FormData;
      this.total = this.candiate.fother + this.candiate.fproperty + this.candiate.fannual + this.candiate.mother + this.candiate.mproperty;
      this.mForm.ids = this.candiate._id;
      this.mForm.name = this.candiate.fullName;
      this.mForm.registration = this.candiate.registration;
      console.log("Total " + this.total);
      this.sibil = this.candiate.members;
    });
    this.crtService.getApplication("5cdf73507998904a488cc219").subscribe((res) => {
      this.crt = res as Crieteria;
      this.dists = this.crt.distance;
      this.incm = this.crt.parent;
      this.cat1 = this.crt.sibil1;
      console.log("Cat1 " + this.cat1);
      this.cat2 = this.crt.sibil2;
      //this.mrk4 = this.sibilng.count1*this.crt.sibil1 + this.sibilng.count2*this.crt.sibil2;
      this.mrk4 = 10;
      for (let i = 0; i < this.dists.length; i++) {

        if (this.dists[i].from < this.candiate.distance) {
          if (this.candiate.distance < this.dists[i].to) {
            this.mrk1 = this.dists[i].marks;
            console.log(this.mrk1);
            console.log(this.dists[i].from + " " + this.candiate.distance);
            this.range1 = this.dists[i].from + " " + this.dists[i].to;

          }
        } else {
          continue;
        }
        this.state = this.checkParent();
        console.log("State " + this.state);
        this.mrk3 = this.mrkParent();
        console.log("Mark3 " + this.mrk3);
      }

      for (let i = 0; i < this.incm.length; i++) {
        if (this.incm[i].from < this.total) {
          if (this.total < this.incm[i].to) {
            this.mrk2 = this.incm[i].marks;
            this.range2 = this.incm[i].from + " " + this.incm[i].to;
            console.log("Marks2 : " + this.mrk2);
          }
        }
      }

    });
    this.fin1 = this.cat1 * 5;
    this.fin2 = this.cat2 * 3.5;
    console.log("Sibiln cat1 "+this.cat1);
    
  }

  onSubmit() {
    this.marks.postForm(this.mForm).subscribe((res) => {
      console.log("Inserted successfully");
    });
  }

  calculate() {
    for (let i = 0; i < 5; i++) {
      /*  if (this.dists[i].from<this.candiate.distance && this.candiate.distance<this.dists[i].to) {
          this.mrk1 = this.dists[i].marks;
          console.log(this.mrk1);
        } else {
          continue;
        }*/

    }
  }
  checkParent(): string {
    if (this.candiate.fliving == "No" && this.candiate.mliving == "No") {

      return "Both father and mother are not living";
    } else if (this.candiate.fliving == "No" || this.candiate.mliving == "No") {
      return "Either father or mother is not living";
    } else {
      if (this.candiate.foccupation == "" || this.candiate.moccupation == "") {
        return "Father or mother unemployed or disabled";
      } else {
        return null;
      }
    }

  }


  mrkParent(): number {
    if (this.candiate.fliving == "No" && this.candiate.mliving == "No") {

      return this.crt.crt1;
    } else if (this.candiate.fliving == "No" || this.candiate.mliving == "No") {
      return this.crt.crt2;
    } else {
      if (this.candiate.foccupation == "" || this.candiate.moccupation == "") {
        return this.crt.crt3;
      } else {
        return 0;
      }
    }
  }

  submit(){
 
    this.mForm.status = "Yes";
    this.mForm.distance = this.mrk1;
    this.mForm.income = this.mrk2;
    this.mForm.parent = this.mrk3;
    
    this.mForm.cat1 = this.sibilng.count1;
    this.mForm.cat2 = this.sibilng.count2;

    this.mForm.sibiling = this.mForm.cat1*5+this.mForm.cat2*3.5;

    this.mForm.marks = this.mrk1*1+this.mrk2*1+this.mrk3*1+this.mForm.cat1*5+this.mForm.cat2*3.5;
    this.marks.postForm(this.mForm).subscribe((res)=>{
      console.log("Final marks " + this.mForm.marks);
      console.log("Submitted successfully");
    })
  }
}
