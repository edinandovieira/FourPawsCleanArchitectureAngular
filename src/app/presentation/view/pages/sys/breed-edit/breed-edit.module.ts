import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedEditRoutingModule } from './breed-edit-routing.module';
import { BreedEditComponent } from './breed-edit.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';


@NgModule({
  declarations: [
    BreedEditComponent
  ],
  imports: [
    CommonModule,
    BreedEditRoutingModule,
    SharedModule
  ]
})
export class BreedEditModule { }
