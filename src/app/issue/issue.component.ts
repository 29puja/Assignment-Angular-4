import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from './issue.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent  implements OnInit{
  issues!:Issue[];

  constructor(private router:Router,private http:HttpClient) { }

  // description:string="";
  // severity:string="";
  // status:string="";
  // id:Number = 0;

   ngOnInit(): void {
   this.getissue();   
  }

  getissue(){
    
    this.http.get<Issue[]>(`http://127.0.0.1:8089/issues`).subscribe(data => {
      this.issues = data;
      console.log(data);
      
    })
  }
  editissue(id:number){
    this.router.navigate(['issues/edit',id]);
    console.log(id);
    }

  deleteissue(id:number){
    this.http.delete(`http://127.0.0.1:8089/issues/${id}`).subscribe(data => {
      console.log(data);
      this.router.navigate(['issues']);
    location.reload();
    })
    
  } 

  view(description:String){
    
      this.router.navigate(['view',description])
  
  }
}
