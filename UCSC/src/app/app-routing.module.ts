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

const routes: Routes = [
 { path: '', redirectTo: '/homepage', pathMatch: 'full'},
 { path: 'homepage' , component: HomepageComponent},
 { path: 'register' , component:RegisterComponent},
 { path: 'login' , component: LoginComponent},
 { path: 'welfare' , component:WelfareComponent},
 { path: 'ifs' , component:IfsComponent},
 { path: 'shorea' ,component:ShoreaComponent},
<<<<<<< HEAD
 { path: 'adminstudent' ,component:AdminStudentApplicationComponent},
 { path: 'applicationDetails/:id' ,component:ApllicantDetailsComponent}
=======
 { path: 'scholarship/getWelfareStu', component:AdminForWelfareScholComponent}
>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,
  WelfareComponent,IfsComponent,ShoreaComponent,ApllicantDetailsComponent,ApllicantDetailsComponent]
=======
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,WelfareComponent,IfsComponent,ShoreaComponent,AdminForWelfareScholComponent]
>>>>>>> 99b4c329951a843ab31951ea968699c307d0eff8
