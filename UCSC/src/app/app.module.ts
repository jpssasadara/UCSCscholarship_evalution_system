import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


import { AppRoutingModule , routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelfareComponent } from './welfare/welfare.component';
import { ShoreaComponent } from './shorea/shorea.component';
import { IfsComponent } from './ifs/ifs.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';
import { FamilyComponent } from './family/family.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';
import { IncomeComponent } from './income/income.component';
import { AdminForWelfareScholComponent } from './admin-for-welfare-schol/admin-for-welfare-schol.component';
import { StudentWellfareService } from './student-wellfare.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from './data/form-data.service';
import { WorkflowService } from './workflow/workflow.service';


import { NgxSmartModalModule } from 'ngx-smart-modal';

import { IfsAdminComponent } from './ifs-admin/ifs-admin.component';
import { IfsApplicationComponent } from './ifs-application/ifs-application.component';
import { CrieteriaComponent } from './crieteria/crieteria.component';
import { ClistComponent } from './clist/clist.component';
import { CitemsComponent } from './citems/citems.component';
import { CtableComponent } from './ctable/ctable.component';
import { from } from 'rxjs';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    WelfareComponent,
    ShoreaComponent,
    IfsComponent,
    FamilyComponent,
    NavbarComponent,
    PersonalComponent,
    ResultComponent,
    IncomeComponent,
    AdminForWelfareScholComponent,
   
    IfsAdminComponent,
   
    IfsApplicationComponent,
   
    CrieteriaComponent,
   
    ClistComponent,
   
    CitemsComponent,

    CtableComponent    
    
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSmartModalModule.forRoot()
    
  ],
  providers: [EnrollmentService,{provide:FormDataService,useClass: FormDataService}, WorkflowService,StudentWellfareService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
