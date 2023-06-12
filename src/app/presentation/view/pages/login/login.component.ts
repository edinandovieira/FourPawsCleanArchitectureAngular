import { AuthService } from './../../../../infra/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService) {}
  ngOnInit() {}
  // initForm(){}

  login(){
    this.authService.login(this.username, this.password).subscribe(
      result => {
        console.log(result);
      }
    )
  }
}
