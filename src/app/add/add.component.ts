import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Issue } from '../issue/issue.model';
//import { HttpClient } from '@angular/common/http';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',  
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  constructor(private issueService:IssueService,private router:Router) {}

  @ViewChild('formRef',{static:false})ahh!:NgForm;
 
  addform:any=null;
   issue:Issue=new Issue();

   ngOnInit(): void {
    this.addform=new FormGroup(
      {
        description:new FormControl('',[Validators.required,Validators.minLength(5)]),
        severity:new FormControl('Major'),
        status:new FormControl('Open')
      }
    );
   }

   onAdd(): void{
      this.issue.description=this.addform.get("description").value;
      this.issue.severity=this.addform.get("severity").value;
      this.issue.status=this.addform.get("status").value;
      console.log(this.issue);
      console.log(this.addform.get("description").value);

      this.issueService.addissue(this.issue).subscribe(data=>{
        console.log(data);
       this.router.navigate(['./issues']);
      });

    //  this.http.post("http://127.0.0.1:8089/add",this.issue).subscribe(data => {
    //   console.log(data)


      //this.router.navigate(['./issues']);
       
  }    

get des():FormControl{
  return this.addform.get("description") as FormControl;
  } 

}
