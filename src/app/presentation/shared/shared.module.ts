import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersiteComponent } from './components/headersite/headersite.component';
import { HeadersysComponent } from './components/headersys/headersys.component';
import { FootersiteComponent } from './components/footersite/footersite.component';

@NgModule({
  declarations: [
    HeadersiteComponent,
    HeadersysComponent,
    FootersiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadersiteComponent,
    FootersiteComponent
  ]
})
export class SharedModule { }
