import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './product-edit.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    SharedModule
  ]
})
export class ProductEditModule { }
