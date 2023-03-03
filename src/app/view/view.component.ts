import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(private router:ActivatedRoute,private r:Router){}
  
  issue:string=""
  ngOnInit(): void {
    this.issue=this.router.snapshot.params['description'];
  }
  ba(){
   this.r.navigate(['issues']);
  }

}
