import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomepageComponent} from './homepage/homepage.component';
import{ RegisterComponent} from './register/register.component';
import{ LoginComponent} from './login/login.component';
import{ WelfareComponent} from './welfare/welfare.component';
import{ IfsComponent} from './ifs/ifs.component';
import{ ShoreaComponent} from './shorea/shorea.component';
import {  FormsModule} from '@angular/forms';

const routes: Routes = [
 { path: '', redirectTo: '/homepage', pathMatch: 'full'},
 { path: 'homepage' , component: HomepageComponent},
 { path: 'register' , component:RegisterComponent},
 { path: 'login' , component: LoginComponent},
 { path: 'welfare' , component:WelfareComponent},
 { path: 'ifs' , component:IfsComponent},
 { path: 'shorea' ,component:ShoreaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,RegisterComponent,LoginComponent,WelfareComponent,IfsComponent,ShoreaComponent]
