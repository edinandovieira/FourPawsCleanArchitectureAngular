import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleCreateRoutingModule } from './sale-create-routing.module';
import { SaleCreateComponent } from './sale-create.component';

import { SharedModule } from './../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    SaleCreateComponent
  ],
  imports: [
    CommonModule,
    SaleCreateRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    NoopAnimationsModule,
    InputNumberModule,
    InputTextModule,
    TableModule
  ]
})
export class SaleCreateModule { }
