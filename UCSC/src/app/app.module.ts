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

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from './data/form-data.service';
import { WorkflowService } from './workflow/workflow.service';


import { NgxSmartModalModule } from 'ngx-smart-modal';

import { IfsAdminComponent } from './ifs-admin/ifs-admin.component';
import { IfsApplicationComponent } from './ifs-application/ifs-application.component';

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

    
    
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
   
    NgxSmartModalModule.forRoot()
    
  ],
  providers: [EnrollmentService,{provide:FormDataService,useClass: FormDataService}, WorkflowService,StudentWellfareService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
