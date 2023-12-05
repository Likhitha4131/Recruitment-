import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class DataService {

  private apiUrl = 'http://localhost:5095';
  private jobUrl='http://localhost:5095/Job'
  constructor(private http: HttpClient) {}


  private candidate = [
    { name: 'John Doe', experience: '2 years',jobappiled:['Front-end Developer'], ExpressedIntrest:'' },
    { name: 'Jane Doe', experience: '3 years' ,jobappiled:['Back-end Developer'], ExpressedIntrest:''},
  ];

  private jobs = [
    { title: 'Front-end Developer', skills: ['HTML', 'CSS', 'JavaScript'], company:'Google',expirenceRequired:'2 years' },
    { title: 'Back-end Developer', skills: ['Node.js', 'Express', 'MongoDB'] ,company:'TCS',expirenceRequired:'3 years'},
    { title: 'Software Engineer', skills: ['C#', '.Net', 'C++','DSA','OOPS'] ,company:'TCS',expirenceRequired:'2 years'},
  ];
  private jobData: any;

  setJobData(data) {
    this.jobData = data;
  }

  getcurrentJob():Observable<any>{
    return this.jobData
  }
  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Job`);
  }
  getCandidates(jobId): Observable<any> {
    const url = `${this.apiUrl}/Candidate/${jobId}`;
    return this.http.get(url);
  }
  addJob(jobdata:any):Observable<any>{
    const skillsInput = jobdata.skills;
    const skillsArray = skillsInput.split('\n');
    const job = { title:jobdata.title, skills: skillsArray, companyName:jobdata.company,expirenceRequired:jobdata.experience,description:jobdata.additionalInfo};
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.jobUrl, job, { headers });
    
  }
  addingAppliedCandidates(applicationData: any,jobappiled:any): Observable<any> {
    const indexOfJohnDoe = this.candidate.findIndex(candidate => candidate.name === applicationData.candidateName);
    if(indexOfJohnDoe !==-1){
      this.candidate[indexOfJohnDoe].jobappiled.push(jobappiled.title);
    }
    else{
      const newCandidate = { name:applicationData.candidateName, experience: applicationData.experience, jobappiled: [jobappiled] ,ExpressedIntrest:applicationData.intrest};
  this.candidate.push(newCandidate);
    }
    console.log('candidates submitted:', this.candidate);
    
     return of({ success: true, message: 'candidate added sucessfully' });
     
  }

}

