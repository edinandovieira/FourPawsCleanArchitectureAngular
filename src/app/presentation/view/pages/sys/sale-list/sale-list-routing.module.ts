import { SaleListComponent } from './sale-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

const routes: Routes = [
  { path: 'sys/sale/list', component: SaleListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleListRoutingModule { }
