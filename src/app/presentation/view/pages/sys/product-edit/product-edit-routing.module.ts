import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

import { ProductEditComponent } from './product-edit.component';

const routes: Routes = [
  { path: 'sys/product/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductEditRoutingModule { }
