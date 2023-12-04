// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AddJobFormComponent } from './add-job-form/add-job-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    JobListComponent,
    ApplicationFormComponent,
    AddJobFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
