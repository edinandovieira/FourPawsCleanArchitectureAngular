import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { BreedModule } from './breed/breed.module';
import { HomeSysModule } from './sys/home/home.module';
import { BreedCreateModule } from './sys/breed-create/breed-create.module';
import { ProductCreateModule } from './sys/product-create/product-create.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    BreedModule,
    HomeSysModule,
    BreedCreateModule,
    ProductCreateModule
  ]
})
export class PagesModule { }
