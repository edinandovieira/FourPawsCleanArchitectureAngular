import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sys-title',
  templateUrl: './sys-title.component.html',
  styleUrls: ['./sys-title.component.scss']
})
export class SysTitleComponent {
  @Input() title: string;

  constructor(){
    this.title = 'Favor informar um valor para o title';
  }
}
