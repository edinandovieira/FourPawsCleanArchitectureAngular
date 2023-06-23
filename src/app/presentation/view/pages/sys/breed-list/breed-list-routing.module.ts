import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

import { BreedListComponent } from './breed-list.component';

const routes: Routes = [
  { path: 'sys/breed/list', component: BreedListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedListRoutingModule { }
