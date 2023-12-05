// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AddJobFormComponent } from './add-job-form/add-job-form.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'candidates', component: CandidateListComponent }, 
  { path: 'jobs', component: JobListComponent },
  {path:'addjob',component:AddJobFormComponent},
  { path: 'apply', component:ApplicationFormComponent},
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

