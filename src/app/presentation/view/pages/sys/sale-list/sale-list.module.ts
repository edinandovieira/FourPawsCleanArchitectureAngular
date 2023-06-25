import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleListRoutingModule } from './sale-list-routing.module';
import { SaleListComponent } from './sale-list.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SaleListComponent
  ],
  imports: [
    CommonModule,
    SaleListRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule
  ]
})
export class SaleListModule { }
