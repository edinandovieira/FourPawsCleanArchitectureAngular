import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from './../../../shared/shared.module';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    InputTextModule,
    FormsModule,
    PasswordModule
  ]
})
export class LoginModule { }
