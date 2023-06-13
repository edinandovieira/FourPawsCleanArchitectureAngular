import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

import { BreedCreateComponent } from './breed-create.component';

const routes: Routes = [
  { path: 'sys/breed/create', component: BreedCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedCreateRoutingModule { }
