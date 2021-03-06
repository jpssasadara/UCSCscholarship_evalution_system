import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomepageComponent} from './homepage/homepage.component';
import{ RegisterComponent} from './register/register.component';
import{ LoginComponent} from './login/login.component';
import{ WelfareComponent} from './welfare/welfare.component';
import{ IfsComponent} from './ifs/ifs.component';
import{ ShoreaComponent} from './shorea/shorea.component';
import{ AdminForWelfareScholComponent} from './admin-for-welfare-schol/admin-for-welfare-schol.component';
import {  FormsModule} from '@angular/forms';
import { AdminStudentApplicationComponent } from './admin-student-application/admin-student-application.component';
import { ApllicantDetailsComponent } from './apllicant-details/apllicant-details.component';
import { PaymentsSaveComponent } from './payments-save/payments-save.component';
import { PaymentApplicantDetailsComponent } from './payment-applicant-details/payment-applicant-details.component';

import { PersonalComponent } from './personal/personal.component';
import { IncomeComponent } from './income/income.component';
import { FamilyComponent } from './family/family.component';
import { ResultComponent } from './result/result.component';

import { IfsApplicationComponent } from './ifs-application/ifs-application.component';



import { CitemsComponent } from './citems/citems.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
export const routes: Routes = [
 //{ path: '', redirectTo: '/homepage', pathMatch: 'full'},

 {
  path: '',
  redirectTo: 'admin',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [
      {
    path: 'admin',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
}]},

{ path:'ifs/list/:_id',component:IfsApplicationComponent},



 { path: 'homepage' , component: HomepageComponent},
 { path: 'register' , component:RegisterComponent},
 { path: 'login' , component: LoginComponent},
 { path: 'welfare' , component:WelfareComponent},
 { path: 'ifs' , component:IfsComponent},
 { path: 'shorea' ,component:ShoreaComponent},
 {path:'ifs/personal',component:PersonalComponent},
 
 {path:'ifs/work',component:IncomeComponent},

 { path: 'ifs/address',  component: FamilyComponent },

 { path: 'ifs/result',  component: ResultComponent },

 { path: 'ifs/',   redirectTo: 'ifs/personal', pathMatch: 'full' },

 

 
 
 

 

 { path: 'admin/ifs/clist/list/:_id', component:CitemsComponent},

 

 { path: 'test/test',component : TestComponent},

 //{ path: '**', component: PersonalComponent },
 { path: 'scholarship/getWelfareStu', component:AdminForWelfareScholComponent},
 { path: 'adminstudent' ,component:AdminStudentApplicationComponent},
 { path: 'applicationDetails/:id' ,component:ApllicantDetailsComponent},
 { path: 'paymentsSave' ,component:PaymentsSaveComponent},
 { path: 'paymentdetialsapplicant/:id' ,component:PaymentApplicantDetailsComponent}


];



@NgModule({
  imports: [
    RouterModule.forRoot(routes ),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,
  WelfareComponent,IfsComponent,ShoreaComponent,ApllicantDetailsComponent,ApllicantDetailsComponent,
  PaymentsSaveComponent,PaymentApplicantDetailsComponent]
