import { ClientCreateComponent } from './client-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

const routes: Routes = [
  { path: 'sys/client/create', component: ClientCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientCreateRoutingModule { }
