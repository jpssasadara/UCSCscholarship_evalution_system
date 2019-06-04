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
import { AdminForWelfareScholComponent } from './admin-for-welfare-schol/admin-for-welfare-schol.component';
import { StudentWellfareService } from './student-wellfare.service';
import { WelfareAdminComponent } from './welfare-admin/welfare-admin.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { WelfareEditComponent } from './welfare-edit/welfare-edit.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterStudentComponent } from './register-student/register-student.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    WelfareComponent,
    ShoreaComponent,
    IfsComponent,
    AdminForWelfareScholComponent,
    WelfareAdminComponent,
    HtmltopdfComponent,
    WelfareEditComponent,
    RegisterStudentComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EnrollmentService,StudentWellfareService,CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
