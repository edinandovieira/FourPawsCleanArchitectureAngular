import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedComponent } from './breed.component';

const routes: Routes = [
  { path: 'breed', component: BreedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedRoutingModule {}
