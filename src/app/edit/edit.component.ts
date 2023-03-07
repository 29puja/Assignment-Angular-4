import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue/issue.model';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  constructor(private issueService:IssueService,private router:ActivatedRoute,private r:Router) {} //private http:HttpClient
 
  addform!:FormGroup; //updateform
  issue:any=null;
  sts!:string;
  id!:number;

   ngOnInit(): void {
    this.issue=new Issue();
    this.id=this.router.snapshot.params['id'];
    //this.http.get<Issue>(`http://127.0.0.1:8089/issues/${this.id}`).subscribe(data => {
      this.issueService.getissuebyid(this.id).subscribe(data=>{

      this.issue=data;
      console.log(data);
      
      this.sts=data.status;
    }),(error:any)=>console.log(error);

    this.addform=new FormGroup(
      {
        description:new FormControl(this.issue.description,[Validators.required,Validators.minLength(5)]),
        severity:new FormControl(this.issue.severity),
        status:new FormControl(this.issue.status)
      }
    );
   }



   update(): void{
      this.issue.description=this.addform.get("description")?.value;
      this.issue.severity=this.addform.get("severity")?.value;
      this.issue.status=this.addform.get("status")?.value;
      this.issue.id=this.id;
      console.log(this.issue);
      
      //this.http.put("http://localhost:8089/update",this.issue).subscribe(data => {  //async function 
      this.issueService.updateissue(this.id,this.issue).subscribe(data=>{
      console.log(data);

      this.r.navigate(['./issues']); //homepage
      });
      
     
} 
get des():FormControl{
  return this.addform.get("description") as FormControl;
} 

O(){
  if(this.sts=="Open")
  {
    return true;
  }
  else{
    return false;
  }
 }
 
 P(){
  if(this.sts=="In Progress")
  {
    return true;
  }
  else{
    return false;
  }
 }
 C(){
  if(this.sts=="Closed")
  {
    return true;
  }
  else{
    return false;
  }
 }


}
