import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { SharedModule } from './../../../../shared/shared.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    SharedModule,
    TableModule
  ]
})
export class ClientListModule { }
