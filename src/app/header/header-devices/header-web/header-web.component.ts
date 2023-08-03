import { Component, Input } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-header-web',
  templateUrl: './header-web.component.html',
  styleUrls: ['./header-web.component.scss'],
})
export class HeaderWebComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;
}
