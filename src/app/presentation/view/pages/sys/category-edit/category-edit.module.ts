import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryEditRoutingModule } from './category-edit-routing.module';
import { CategoryEditComponent } from './category-edit.component';
import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    CategoryEditRoutingModule,
    SharedModule,
    FormsModule,
    NoopAnimationsModule,
    ToastModule,
    ButtonModule
  ]
})
export class CategoryEditModule { }
