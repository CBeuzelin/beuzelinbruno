import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { EResponsiveClass } from '../shared/resources/enums/responsive-class.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;

  @Input()
  public responsive: EResponsiveClass | undefined;

  public eResponsiveClass = EResponsiveClass;
}
