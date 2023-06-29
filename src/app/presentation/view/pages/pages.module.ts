import { UserListModule } from './sys/user-list/user-list.module';
import { UserCreateModule } from './sys/user-create/user-create.module';
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
import { ClientListModule } from './sys/client-list/client-list.module';
import { ClientCreateModule } from './sys/client-create/client-create.module';
import { CategoryEditModule } from './sys/category-edit/category-edit.module';
import { CategoryListModule } from './sys/category-list/category-list.module';
import { CategoryCreateModule } from './sys/category-create/category-create.module';
import { SaleCreateModule } from './sys/sale-create/sale-create.module';
import { SaleDetailModule } from './sys/sale-detail/sale-detail.module';
import { SaleListModule } from './sys/sale-list/sale-list.module';

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
    CategoryCreateModule,
    CategoryListModule,
    CategoryEditModule,
    ClientCreateModule,
    ClientListModule,
    UserCreateModule,
    UserListModule,
    HttpClientModule
  ]
})
export class PagesModule { }
