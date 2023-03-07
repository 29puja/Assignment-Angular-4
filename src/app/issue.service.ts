import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { nanoid} from 'nanoid';
import { Issue } from './issue/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private API_BASE_URL="http://localhost:8082/api/issues";    //http://127.0.0.1:8089/issues

  private httpOptions={
    headers:new HttpHeaders({
      'content-Type':'application/json'
    })
  };
  
  constructor(private http:HttpClient) { }

  getissue():Observable<Issue[]> {
    //return this._http.get<Issue[]>(`${this.API_BASE_URL}/issues`);
    return this.http.get<Issue[]>(this.API_BASE_URL);
  }

  addissue(issue:Issue): Observable<Object> {
   // return this._http.post(`${this.API_BASE_URL}/add`,issue);
    return this.http.post(this.API_BASE_URL,issue);
  }

  getissuebyid(id:number): Observable<Issue> {
    //return this._http.get<Issue>(`${this.API_BASE_URL}/issues/${id}`);
    return this.http.get<Issue>(`${this.API_BASE_URL}/${id}`);

  }

  updateissue(id:number,issue:Issue): Observable<Object> {   //issue:Issue
    //return this._http.put(`${this.API_BASE_URL}/update`,issue);
    return this.http.put(`${this.API_BASE_URL}/${id}`,issue);

  }

  deleteissue(id:number): Observable<Object> {
    //return this._http.delete(`${this.API_BASE_URL}/issues/${id}`);
    return this.http.delete<Issue>(`${this.API_BASE_URL}/${id}`);
   
  }
   
}


 