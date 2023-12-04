import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private candidates = [
    {  name: 'John Doe', experience: '2 years',jobappiled:['Front-end Developer'] },
    { name: 'Jane Doe', experience: '3 years' ,jobappiled:['Back-end Developer']},
  ];

  private jobs = [
    { title: 'Front-end Developer', skills: ['HTML', 'CSS', 'JavaScript'], company:'Google' },
    { title: 'Back-end Developer', skills: ['Node.js', 'Express', 'MongoDB'] ,company:'TCS'},
    { title: 'Software Engineer', skills: ['C#', '.Net', 'C++','DSA','OOPS'] ,company:'TCS'},
  ];

  getCandidates(jobappiled): Observable<any[]> {
    const candidate=this.candidates.filter(candidate => candidate.jobappiled.includes(jobappiled));
    return of(candidate);
  }
  addjob(jobdata:any):Observable<any>{
    const skillsInput = jobdata.skills;
    const skillsArray = skillsInput.split('\n');
    const job = { title:jobdata.title, skills: skillsArray, company:jobdata.company};
    this.jobs.push(job);
    return of({sucess:true,message:this.jobs});
  }
  addingAppliedCandidates(applicationData: any,jobappiled:any): Observable<any> {
    const indexOfJohnDoe = this.candidates.findIndex(candidate => candidate.name === applicationData.candidateName);
    if(indexOfJohnDoe !==-1){
      this.candidates[indexOfJohnDoe].jobappiled.push(jobappiled.title);
    }
    else{
      const newCandidate = { name:applicationData.candidateName, experience: applicationData.experience, jobappiled: [jobappiled] };
  this.candidates.push(newCandidate);
    }
    console.log('candidates submitted:', this.candidates);
     return of({ success: true, message: 'candidate added sucessfully' });
     
  }
  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }
  addJob(applicationData: any): Observable<any> {
   
    console.log('Application submitted:', applicationData);
    return of({ success: true, message: 'Application submitted successfully!' });
  }
  applyForJob(applicationData: any): Observable<any> {
    console.log('Application submitted:', applicationData);
    return of({ success: true, message: 'Application submitted successfully!' });
  }
}

