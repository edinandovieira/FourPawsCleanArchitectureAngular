import { baseUrl } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../infra/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BreedService {

  header;

  constructor(private http:HttpClient, private auth:AuthService) { 
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getCredentials()
    })
  }  

  Create(form: FormData): Observable<any>{
    return this.http
                .post(`${baseUrl}v1/raca`,form, {headers: this.header});
  }

  GetAll(): Observable<any>{
    return this.http.get(`${baseUrl}v1/raca`, {headers: this.header});
  }

  Get(id: string): Observable<any>{
    return this.http.get(`${baseUrl}v1/raca/${id}`, {headers: this.header});
  }

  GetAvatar(id: string): Observable<any>{
    return this.http.get(`${baseUrl}v1/raca/avatar/${id}`);
  }

  GetStatus(){
    let options: string[] = ['Ativo', 'Inativo'];
    return options;
  }

  Update(id: string, form: FormData): Observable<any>{
    return this.http
                .put(`${baseUrl}v1/raca/${id}`,form, {headers: this.header});
  }

  Remove(id: string): Observable<any>{
    return this.http.delete(`${baseUrl}v1/raca/${id}`, {headers: this.header});
  }
}
