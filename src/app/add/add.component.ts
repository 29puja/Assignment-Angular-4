import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Issue } from '../issue/issue.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',  
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private router:Router,private http:HttpClient) {}

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
     
     this.http.post("http://127.0.0.1:8089/add",this.issue).subscribe(data => {
      console.log(data)

      this.router.navigate(['./issues']);

     })

} 
get des():FormControl{
  return this.addform.get("description") as FormControl;
} 

}
