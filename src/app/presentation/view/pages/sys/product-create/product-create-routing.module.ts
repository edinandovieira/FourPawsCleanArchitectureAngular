import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

import { ProductCreateComponent } from './product-create.component';

const routes: Routes = [
  { path: 'sys/product/create', component: ProductCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCreateRoutingModule { }
