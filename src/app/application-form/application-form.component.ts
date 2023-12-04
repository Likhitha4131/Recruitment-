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
  jobtitle:any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService,private route: ActivatedRoute, private router: Router,) {
    this.applicationForm = this.formBuilder.group({
      candidateName: ['', Validators.required],
      experience:['',Validators.required],
      additionalInfo: ['']
    });
  }
  experienceOptions: string[] = ['1 year', '2 years', '3 years', '4 years', '5+ years'];
  ngOnInit(): void {
   
    const navigatedFromJobs = this.route.snapshot.paramMap.has('jobTitle');
    this.jobtitle=this.route.snapshot.paramMap.get('jobTitle');
    if (!navigatedFromJobs) {
      this.router.navigate(['/jobs']);
    }
    
  }
  onSubmit() {
    if (this.applicationForm.valid) {
      this.dataService.applyForJob(this.applicationForm.value).subscribe(response => {
        console.log(response);
      });
      this.dataService.addingAppliedCandidates(this.applicationForm.value,this.jobtitle).subscribe(response=>{
        console.log(response);
      });
      this.applicationForm.reset();
    }
  }
}
