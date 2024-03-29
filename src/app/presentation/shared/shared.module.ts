import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersiteComponent } from './components/headersite/headersite.component';
import { HeadersysComponent } from './components/headersys/headersys.component';
import { FootersiteComponent } from './components/footersite/footersite.component';
import { SysTitleComponent } from './components/sys/sys-title/sys-title.component';
import { SysFormComponent } from './components/sys/sys-form/sys-form.component';

import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeadersiteComponent,
    HeadersysComponent,
    FootersiteComponent,
    SysTitleComponent,
    SysFormComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule
  ],
  exports: [
    HeadersiteComponent,
    HeadersysComponent,
    FootersiteComponent,
    SysTitleComponent,
    SysFormComponent
  ]
})
export class SharedModule { }
