import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-header-tablet',
  templateUrl: './header-tablet.component.html',
  styleUrls: ['./header-tablet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderTabletComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;
}
