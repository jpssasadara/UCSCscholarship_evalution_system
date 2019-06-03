import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = "http://localhost:3000";
  private userId: string;
  private token: string;
  private email:string;
  private role:string;
private isAuthenticated: boolean = false;
constructor(private http: HttpClient, private router: Router) { }

login(email: string,password: string)
{
  return this.http.post<{message:Number,token:string}>(this.url+'/api/user/login',{email: email,password:password});
}

getUserId() {
  return this.userId;
}
getToken() {
  return this.token;
}

setToken(token:string)
{
  this.token = token;
}

setEmail(email:string)
{
  this.email = email;
}

getEmail()
{
  return this.email;
}

getRole()
{
  return this.role;
}

getIsAuth() {
  return this.isAuthenticated || localStorage.getItem("token") != null;
}

setCredentials(userId: string, token: string, role: string,email: string) {
  this.role = role;
  this.userId = userId;
  this.token = token;
  this.email = email;
  console.log(this.email);
  this.isAuthenticated = true;
  localStorage.setItem("id", this.userId);
  localStorage.setItem("token", this.token);
  localStorage.setItem("role",this.role);
}

logout() {
  this.role = "H";
  this.userId = "";
  this.token = "";
  this.email = "";
  this.isAuthenticated = false;
  localStorage.clear();
  //this.clearLocalStorage();


  this.router.navigate(["/"]);
}

resetEmail(email:string)
{
  return this.http.post<{message:Number,email:string}>(this.url+"/api/user/resetEmail",{email:email,id:this.userId});
}

 resetPassword(password:string)
{
  return this.http.post<{message:Number}>(this.url+"/api/user/resetPassword",{password:password,id:this.userId});
}
}
