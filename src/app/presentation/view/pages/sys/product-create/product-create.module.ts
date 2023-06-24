import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCreateComponent } from './product-create.component';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    NoopAnimationsModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule
  ]
})
export class ProductCreateModule { }
