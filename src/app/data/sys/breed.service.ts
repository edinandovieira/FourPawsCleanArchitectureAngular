import { baseUrl } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../infra/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class BreedService {

  header;

  constructor(private http:HttpClient, private auth:AuthService, private router: Router) { 
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getCredentials()
    })
  }  

  Create(form: FormData){
    return this.http
                .post(`${baseUrl}v1/raca`,form, {headers: this.header})
                .subscribe((response) => {
                  this.router.navigate(['sys/breed/create']);
                });
  }
}
