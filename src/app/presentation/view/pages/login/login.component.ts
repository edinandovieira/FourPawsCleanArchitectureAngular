import { AuthService } from './../../../../infra/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  // initForm(){}

  login(){
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe(
      result => {
        this.router.navigate(['sys/home']);
      },
      error => {
        this.loading = false;
      }
    )
  }
}
