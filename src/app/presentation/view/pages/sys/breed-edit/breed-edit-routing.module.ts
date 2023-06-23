import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth.guard';

import { BreedEditComponent } from './breed-edit.component';

const routes: Routes = [
  { path: 'sys/breed/edit', component: BreedEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedEditRoutingModule { }
