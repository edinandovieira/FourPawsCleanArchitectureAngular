import { baseUrl } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any>{

    var body = {
      login: username,
      password: password
    };

    return this.http.post<any>(`${baseUrl}v1/login`,body).pipe(
      tap((response) => {
        const token = response.token;
        this.setCredentials(token);
      })
    );
  }

  setCredentials(token: string){
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  getCredentials(){
    return localStorage.getItem('token');
  }
}
