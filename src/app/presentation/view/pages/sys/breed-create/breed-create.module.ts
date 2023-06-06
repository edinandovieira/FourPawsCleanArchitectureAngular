import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedCreateComponent } from './breed-create.component';

import { BreedCreateRoutingModule } from './breed-create-routing.module';
import { SharedModule } from 'src/app/presentation/shared/shared.module';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    BreedCreateComponent
  ],
  imports: [
    CommonModule,
    BreedCreateRoutingModule,
    SharedModule,
    InputTextModule  
  ]
})
export class BreedCreateModule { }