import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { BreedListRoutingModule } from './breed-list-routing.module';
import { BreedListComponent } from './breed-list.component';
import { ToastModule } from 'primeng/toast';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    BreedListComponent
  ],
  imports: [
    CommonModule,
    BreedListRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    NoopAnimationsModule,
    ToastModule 
  ]
})
export class BreedListModule { }
