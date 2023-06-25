import { SaleDetailComponent } from './sale-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

const routes: Routes = [
  { path: 'sys/sale/detail/:id', component: SaleDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleDetailRoutingModule { }
