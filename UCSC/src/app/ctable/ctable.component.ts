import { Component, OnInit, ViewChild } from '@angular/core';
import { MarksService } from '../shared/marks.service';
import { Marks } from '../shared/marks.model';
import { MatTableDataSource,MatSort, MatPaginator,MatIconModule, MatIconRegistry} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.css'],
})
export class CtableComponent implements OnInit {
  arr : Marks[];
  searchKey : string;
  listData : MatTableDataSource<any>;
  displayedColumns : string[] = ['name','status','marks'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  searchField = new FormControl();
  constructor(private service:MarksService) { }

  ngOnInit() {
    this.service.getForm().subscribe((res)=>{
      this.arr = res as Marks[];
      this.listData = new MatTableDataSource(this.arr);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
