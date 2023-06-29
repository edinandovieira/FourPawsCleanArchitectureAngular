import { AuthService } from './../../../../infra/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  loading: boolean = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService, 
    private router: Router
    ) {}
  ngOnInit() {}
  // initForm(){}

  login(){
    this.loading = true;
    this.authService.login(this.username, this.password).subscribe(
      result => {
        this.router.navigate(['sys/home']);
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Login ou senha inválidos'});
        this.loading = false;
      }
    )
  }
}
