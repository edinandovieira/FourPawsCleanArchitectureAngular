import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientCreateRoutingModule } from './client-create-routing.module';
import { ClientCreateComponent } from './client-create.component';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ClientCreateComponent
  ],
  imports: [
    CommonModule,
    ClientCreateRoutingModule,
    SharedModule,
    InputMaskModule,
    ToastModule,
    NoopAnimationsModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ]
})
export class ClientCreateModule { }
