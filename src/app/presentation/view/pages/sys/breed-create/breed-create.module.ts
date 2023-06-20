import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedCreateComponent } from './breed-create.component';

import { BreedCreateRoutingModule } from './breed-create-routing.module';
import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BreedCreateComponent
  ],
  imports: [
    CommonModule,
    BreedCreateRoutingModule,
    SharedModule,
    FormsModule,
    ButtonModule,
    NoopAnimationsModule,
    ToastModule    
  ]
})
export class BreedCreateModule { }
