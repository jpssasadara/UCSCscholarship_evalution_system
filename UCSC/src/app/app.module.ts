import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ChangeDetectorRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

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

import { IfsApplicationComponent } from './ifs-application/ifs-application.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from './data/form-data.service';
import { WorkflowService } from './workflow/workflow.service';


import { NgxSmartModalModule } from 'ngx-smart-modal';





import { CitemsComponent } from './citems/citems.component';

import { from } from 'rxjs';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material';
import { MatDialogModule,MatToolbarModule,MatGridListModule,MatButtonModule } from '@angular/material';


import { NavigationComponent } from './navigation/navigation.component';
import { AdminStudentApplicationComponent } from './admin-student-application/admin-student-application.component';
import { ApllicantDetailsComponent } from './apllicant-details/apllicant-details.component';
import { StudentWellfareService } from './student-wellfare.service';
import { PaymentsSaveComponent } from './payments-save/payments-save.component';
import { PaymentApplicantDetailsComponent } from './payment-applicant-details/payment-applicant-details.component';
import { NotificationComponent } from './notification/notification.component';

import { ComponentsModule } from './components/components.module';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponent } from './test/test.component';

import { ToastrService, ToastrModule } from 'ngx-toastr';
import { NgxQRCodeModule } from 'ngx-qrcode2';

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
   
   
   
    IfsApplicationComponent,
   
   
   
    
   
    CitemsComponent,

   

    
    NavigationComponent,
    AdminStudentApplicationComponent,
    ApllicantDetailsComponent,
    PaymentsSaveComponent,
    PaymentApplicantDetailsComponent,
    NotificationComponent,
    AdminLayoutComponent,
    TestComponent,
   

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
    ToastrModule.forRoot(),

    FormsModule,
    ReactiveFormsModule,
    
    
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,

    NgbModule,
    NgxQRCodeModule,

  ],
  providers: [EnrollmentService,{provide:FormDataService,useClass: FormDataService}, WorkflowService,StudentWellfareService ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
