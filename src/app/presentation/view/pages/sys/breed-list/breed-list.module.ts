import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { BreedListRoutingModule } from './breed-list-routing.module';
import { BreedListComponent } from './breed-list.component';

@NgModule({
  declarations: [
    BreedListComponent
  ],
  imports: [
    CommonModule,
    BreedListRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule
  ]
})
export class BreedListModule { }
