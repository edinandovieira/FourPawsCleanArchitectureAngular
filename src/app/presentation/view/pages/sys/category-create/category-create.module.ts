import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryCreateRoutingModule } from './category-create-routing.module';
import { CategoryCreateComponent } from './category-create.component';
import { SharedModule } from './../../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    CategoryCreateRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    NoopAnimationsModule,
    InputTextModule
  ]
})
export class CategoryCreateModule { }
