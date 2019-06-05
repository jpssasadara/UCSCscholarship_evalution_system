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
import { WelfareAdminComponent } from './welfare-admin/welfare-admin.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { WelfareEditComponent } from './welfare-edit/welfare-edit.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentDashComponent } from './student-dash/student-dash.component';

const routes: Routes = [
 { path: '', redirectTo: '/homepage', pathMatch: 'full'},
 { path: 'homepage' , component: HomepageComponent},
 { path: 'register' , component:RegisterComponent},
 { path: 'login' , component: LoginComponent},
 { path: 'welfare' , component:WelfareComponent},
 { path: 'ifs' , component:IfsComponent},
 { path: 'shorea' ,component:ShoreaComponent},
 { path: 'scholarship/getWelfareStu', component:AdminForWelfareScholComponent},
 { path:'admin/welfare/app/:application',component:WelfareAdminComponent},
 { path: 'welfare/getpdf',component:HtmltopdfComponent},
 { path: 'welfare/edit',component:WelfareEditComponent},
 { path: "admin/register/student/:regNumber/:email",component:RegisterStudentComponent},
 { path: "studentdash",component:StudentDashComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,WelfareComponent,IfsComponent,ShoreaComponent,AdminForWelfareScholComponent,WelfareAdminComponent,HtmltopdfComponent,WelfareEditComponent,RegisterStudentComponent,StudentDashComponent]
