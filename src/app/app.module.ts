import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueComponent } from './issue/issue.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { ViewIssueDetailsGuard } from './view-issue-details.guard';




@NgModule({
  declarations: [
    AppComponent,
    IssueComponent,
    AboutComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
    
  ],
  providers: [ViewIssueDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
