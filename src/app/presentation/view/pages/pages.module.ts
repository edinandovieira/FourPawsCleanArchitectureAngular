import { SaleCreateModule } from './sys/sale-create/sale-create.module';
import { SaleDetailModule } from './sys/sale-detail/sale-detail.module';
import { SaleListModule } from './sys/sale-list/sale-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { BreedModule } from './breed/breed.module';
import { HomeSysModule } from './sys/home/home.module';
import { BreedCreateModule } from './sys/breed-create/breed-create.module';
import { ProductCreateModule } from './sys/product-create/product-create.module';
import { BreedListModule } from './sys/breed-list/breed-list.module';
import { ProductEditModule } from './sys/product-edit/product-edit.module';
import { BreedEditModule } from './sys/breed-edit/breed-edit.module';
import { ProductListModule } from './sys/product-list/product-list.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    BreedModule,
    HomeSysModule,
    BreedCreateModule,
    ProductCreateModule,
    BreedListModule,
    ProductListModule,
    BreedEditModule,
    ProductEditModule,
    SaleCreateModule,
    SaleListModule,
    SaleDetailModule,
    HttpClientModule
  ]
})
export class PagesModule { }
