import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedCreateComponent } from './breed-create.component';

const routes: Routes = [
  { path: 'sys/breed/create', component: BreedCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedCreateRoutingModule { }
