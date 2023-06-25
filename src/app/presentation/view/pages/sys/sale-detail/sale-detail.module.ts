import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleDetailRoutingModule } from './sale-detail-routing.module';
import { SaleDetailComponent } from './sale-detail.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    SaleDetailComponent
  ],
  imports: [
    CommonModule,
    SaleDetailRoutingModule,
    SharedModule,
    TableModule
  ]
})
export class SaleDetailModule { }
