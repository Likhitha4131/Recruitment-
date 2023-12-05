// application-form.component.ts
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})

export class ApplicationFormComponent implements OnInit{
  applicationForm: FormGroup;
  job:any;
  jobtitle:any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,private route: ActivatedRoute, private router: Router,) {
    this.applicationForm = this.formBuilder.group({
      candidateName: ['', Validators.required],
      experience:['',Validators.required],
      additionalInfo: ['']
    });
  }
  experienceOptions: number[] = [1,2,3,4,5];
  ngOnInit(): void {
   this.job=this.dataService.getcurrentJob();
    const navigatedFromJobs = this.route.snapshot.paramMap.has('jobId');
    this.jobtitle=this.job.title;
    if (!navigatedFromJobs) {
      this.router.navigate(['/jobs']);
    }
    
  }
  onSubmit() {
    if (this.applicationForm.valid) {
      
      this.dataService.addingAppliedCandidates(this.applicationForm.value,this.job).subscribe(response=>{
        console.log(response);
      });
      this.applicationForm.reset();
    }
  }
}
