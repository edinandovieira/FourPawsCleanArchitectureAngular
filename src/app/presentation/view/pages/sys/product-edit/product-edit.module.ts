import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    NoopAnimationsModule,
    ToastModule,
    InputNumberModule,
    InputTextModule
  ]
})
export class ProductEditModule { }
