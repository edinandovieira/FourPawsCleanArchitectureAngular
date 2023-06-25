import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleCreateRoutingModule } from './sale-create-routing.module';
import { SaleCreateComponent } from './sale-create.component';


@NgModule({
  declarations: [
    SaleCreateComponent
  ],
  imports: [
    CommonModule,
    SaleCreateRoutingModule
  ]
})
export class SaleCreateModule { }
