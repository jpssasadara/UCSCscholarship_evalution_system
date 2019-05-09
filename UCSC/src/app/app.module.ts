import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelfareComponent } from './welfare/welfare.component';
import { ShoreaComponent } from './shorea/shorea.component';
import { IfsComponent } from './ifs/ifs.component';
import { HttpClientModule } from '@angular/common/http';
import { EnrollmentService } from './enrollment.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminStudentApplicationComponent } from './admin-student-application/admin-student-application.component';
import { ApllicantDetailsComponent } from './apllicant-details/apllicant-details.component';
import { StudentWellfareService } from './student-wellfare.service';
import { PaymentsSaveComponent } from './payments-save/payments-save.component';
import { PaymentApplicantDetailsComponent } from './payment-applicant-details/payment-applicant-details.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    WelfareComponent,
    ShoreaComponent,
    IfsComponent,
    NavigationComponent,
    AdminStudentApplicationComponent,
    ApllicantDetailsComponent,
    PaymentsSaveComponent,
    PaymentApplicantDetailsComponent,
    NotificationComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EnrollmentService,StudentWellfareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
