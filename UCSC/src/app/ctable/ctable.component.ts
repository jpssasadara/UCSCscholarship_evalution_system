import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MarksService } from '../shared/marks.service';
import { Marks } from '../shared/marks.model';
import { MatTableDataSource,MatSort, MatPaginator,MatIconModule, MatIconRegistry} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material';
import { FormControl,FormGroup } from '@angular/forms'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { CformComponent } from '../cform/cform.component';
import { CformService } from '../shared/cform.service';
import { Crieteria } from '../shared/crieteria.model';

@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.css'],
})
export class CtableComponent implements OnInit {
  arr : Marks[];
  crt : Crieteria;
  appl : FormData;
  searchKey : string;
  listData : MatTableDataSource<any>;
  isClicked : boolean[];
  displayedColumns : string[] = ['name','status','marks','actions'];
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  searchField = new FormControl();
  constructor(private service:MarksService,public ngxSmartModalService: NgxSmartModalService,private mService:MarksService, private dialog:MatDialog, private fservice:CformService, private changeDetector : ChangeDetectorRef) { }

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

 
  onCreate(){
    this.fservice.initializeForm();
    const dialogConfig = new MatDialogConfig();
   // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CformComponent,dialogConfig);
  }

  onEdit(row){
    
    this.fservice.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = "60%";
     this.dialog.open(CformComponent,dialogConfig).afterClosed().subscribe((res)=>{
       this.refresh();
     })
   
  }

  refresh(){
    this.service.getForm().subscribe((res)=>{
      this.arr = res as Marks[];
      this.listData = new MatTableDataSource(this.arr);
      this.changeDetector.detectChanges();
    });
  }

}
