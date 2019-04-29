import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from './../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule} from './auth/auth.module';
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
