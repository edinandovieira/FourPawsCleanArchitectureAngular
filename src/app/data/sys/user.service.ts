import { baseUrl } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../infra/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  header;

  constructor(private http:HttpClient, private auth:AuthService) { 
    this.header = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getCredentials()
    })
  }  

  Create(form: any): Observable<any>{
    return this.http
                .post(`${baseUrl}v1/usuario`,form, {headers: this.header});
  }

  GetAll(): Observable<any>{
    return this.http.get(`${baseUrl}v1/usuario`, {headers: this.header});
  }

  Get(id: string): Observable<any>{
    return this.http.get(`${baseUrl}v1/usuario/${id}`, {headers: this.header});
  }

  GetStatus(){
    let options: string[] = ['Ativo', 'Inativo'];
    return options;
  }

  Update(id: string, form: FormData): Observable<any>{
    return this.http
                .put(`${baseUrl}v1/usuario/${id}`,form, {headers: this.header});
  }
}
