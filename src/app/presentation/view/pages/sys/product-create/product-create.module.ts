import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { ProductCreateComponent } from './product-create.component';

import { SharedModule } from 'src/app/presentation/shared/shared.module';

@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    SharedModule
  ]
})
export class ProductCreateModule { }
