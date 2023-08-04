import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderWebComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;
}
