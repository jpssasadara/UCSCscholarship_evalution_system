import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {

private url = "http://localhost:3000";

constructor(private http: HttpClient) { }

retrieveAllApplicants(batch:string)
{
  return this.http.post<{message:Number,result:Array<Object>}>(this.url+"/api/applicants/getAll",{batch:batch});
}

retrieveApplicant(applicantId:string)
{
  return this.http.post<{message:Number,result:Object}>(this.url+"/api/applicants/getApplicant",{id:applicantId});
}

saveSelectedApplicants(idArr)
{
  return this.http.post<{message:Number}>(this.url+"/api/applicants/saveSelectedApplicants",{applicantsArr:JSON.stringify(idArr)});

}

retrieveSelectedApplicants(batch:string)
{
  return this.http.post<{message:Number,result:Array<Object>}>(this.url+"/api/applicants/getSelectedApplicants",{batch:batch});
}
}
