import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedComponent } from './breed.component';

import { BreedRoutingModule } from './breed-routing.module';
import { SharedModule } from './../../../shared/shared.module';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    BreedComponent
  ],
  imports: [
    CommonModule,
    BreedRoutingModule,
    SharedModule,
    InputTextModule
  ]
})
export class BreedModule {}
