import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedEditComponent } from './breed-edit.component';

import { BreedEditRoutingModule } from './breed-edit-routing.module';
import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    BreedEditComponent
  ],
  imports: [
    CommonModule,
    BreedEditRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    NoopAnimationsModule,
    ToastModule 
  ]
})
export class BreedEditModule { }
