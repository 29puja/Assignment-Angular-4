import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { AddComponent } from './add/add.component';
import { GuardService } from './guard.service';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ViewIssueDetailsGuard } from './view-issue-details.guard';


const routes: Routes= [ 
  {path:'issues',component:IssueComponent},
  {path:'',redirectTo:'issues',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'issues/add',component:AddComponent,canDeactivate:[GuardService]},
  {path:'issues/edit/:id',component:EditComponent},
  {path:'view/:description',component:ViewComponent,canActivate:[ViewIssueDetailsGuard]},
  {path:'**',redirectTo:'issues'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
