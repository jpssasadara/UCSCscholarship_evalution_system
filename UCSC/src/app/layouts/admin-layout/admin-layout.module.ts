import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CrieteriaComponent } from '../../crieteria/crieteria.component';
import { IfsAdminComponent } from '../../ifs-admin/ifs-admin.component';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { NgxSmartModalModule } from 'ngx-smart-modal';

import { from } from 'rxjs';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material';
import { MatDialogModule,MatToolbarModule,MatGridListModule,MatButtonModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
   
    FormsModule,
   
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
   
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatButtonModule,
   
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    NgxSmartModalModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
    
    
    FormsModule,
    ReactiveFormsModule,
    

    NgbModule
  ],
  declarations: [
    DashboardComponent,
    CrieteriaComponent,
    IfsAdminComponent,

  ]
})

export class AdminLayoutModule {}
