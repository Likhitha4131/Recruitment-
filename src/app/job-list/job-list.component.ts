// job-list.component.ts
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  searchTerm: string = '';

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    this.dataService.getJobs().subscribe(data => this.jobs = data);
    this.filteredJobs = this.jobs;
  }
  applyForJob(job: any): void {
    this.router.navigate(['/apply', { jobTitle: job.title }]);
    console.log(`Applying for job: ${job.title}`);
    
  }
  candidatesApplied(job : any):void{
    this.router.navigate(['/candidates', { jobTitle: job.title }]);

  }
  filterJobs() {
    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
}

