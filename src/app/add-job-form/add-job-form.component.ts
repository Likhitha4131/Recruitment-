import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css']
})
export class AddJobFormComponent implements OnInit {
  applicationForm: FormGroup;
  jobtitle:any;
  skills: string = '';
  experienceOptions: number[] = [1,2,3,4,5];
  constructor(private formBuilder: FormBuilder, private dataService: DataService,private route: ActivatedRoute, private router: Router,) {
    this.applicationForm = this.formBuilder.group({
      title: ['', Validators.required],
      skills:['',Validators.required],
      company:['',Validators.required],
      experience:['',Validators.required],
      additionalInfo: ['',Validators.required]
    });
    
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.applicationForm.valid) {
      this.dataService.addJob(this.applicationForm.value).subscribe(response=>{
        console.log(response);
      });
      this.applicationForm.reset();
    }
  }

}
