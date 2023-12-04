// candidate-list.component.ts
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];
  jobtitle:any;
  constructor(private dataService: DataService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const navigatedFromJobs = this.route.snapshot.paramMap.has('jobTitle');
    this.jobtitle=this.route.snapshot.paramMap.get('jobTitle');
    if (!navigatedFromJobs) {
      // If not navigated from "Jobs", navigate back to "Jobs" or any other route
      this.router.navigate(['/jobs']);
     
    }
    this.dataService.getCandidates(this.jobtitle).subscribe(data => this.candidates = data);
  }
}

