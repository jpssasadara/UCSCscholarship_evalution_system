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

import { PersonalComponent } from './personal/personal.component';
import { IncomeComponent } from './income/income.component';
import { FamilyComponent } from './family/family.component';
import { ResultComponent } from './result/result.component';

import { IfsAdminComponent } from './ifs-admin/ifs-admin.component';
import { IfsApplicationComponent } from './ifs-application/ifs-application.component';
import { CrieteriaComponent } from './crieteria/crieteria.component';
import { ClistComponent } from './clist/clist.component';
import { CitemsComponent } from './citems/citems.component';
import { CtableComponent } from './ctable/ctable.component';

export const routes: Routes = [
 { path: '', redirectTo: '/homepage', pathMatch: 'full'},
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

 { path: 'admin/ifs' , component: IfsAdminComponent },

 { path: 'admin/ifs/:_id',component:IfsApplicationComponent},
 
 { path: 'admin/ifs/crieteria/home', component:CrieteriaComponent},

 { path: 'admin/ifs/clist/list', component:ClistComponent},

 { path: 'admin/ifs/clist/list/:_id', component:CitemsComponent},

 { path: 'ifs/admin/ctable', component:CtableComponent},

 //{ path: '**', component: PersonalComponent },
 { path: 'scholarship/getWelfareStu', component:AdminForWelfareScholComponent}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes ),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,WelfareComponent,IfsComponent,ShoreaComponent,AdminForWelfareScholComponent]
