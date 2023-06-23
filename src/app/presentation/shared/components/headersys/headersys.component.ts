import { AuthService } from './../../../../infra/auth.service';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-headersys',
  templateUrl: './headersys.component.html',
  styleUrls: ['./headersys.component.scss']
})
export class HeadersysComponent implements OnInit {
  public logo01 = "../../../../../assets/logo01.svg";
  public login: string = "";

  constructor(
    private auth:AuthService
  ){

  }

  ngOnInit(){
      let token = this.auth.getCredentials();
      if (token) {
        let decodedToken: any = jwtDecode(token);
        this.login = decodedToken.login;
      }      
  }
}
