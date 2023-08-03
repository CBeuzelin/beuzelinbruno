import { Component, Input } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-header-handset',
  templateUrl: './header-handset.component.html',
  styleUrls: ['./header-handset.component.scss']
})
export class HeaderHandsetComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;
}
