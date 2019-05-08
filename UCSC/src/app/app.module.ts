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
<<<<<<< HEAD
import { NavigationComponent } from './navigation/navigation.component';
import { AdminStudentApplicationComponent } from './admin-student-application/admin-student-application.component';
import { ApllicantDetailsComponent } from './apllicant-details/apllicant-details.component';
=======
import { AdminForWelfareScholComponent } from './admin-for-welfare-schol/admin-for-welfare-schol.component';
import { StudentWellfareService } from './student-wellfare.service';

>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    WelfareComponent,
    ShoreaComponent,
    IfsComponent,
<<<<<<< HEAD
    NavigationComponent,
    AdminStudentApplicationComponent,
    ApllicantDetailsComponent


=======
    AdminForWelfareScholComponent
    
    
>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8
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
