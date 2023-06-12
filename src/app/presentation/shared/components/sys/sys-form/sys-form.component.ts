import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sys-form',
  templateUrl: './sys-form.component.html',
  styleUrls: ['./sys-form.component.scss']
})
export class SysFormComponent {
  @Input() form: any;
}
