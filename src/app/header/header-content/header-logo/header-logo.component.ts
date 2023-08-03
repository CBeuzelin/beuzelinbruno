import { Component } from '@angular/core';
import { navTabs } from '../../resources/constants/nav-tab.constant';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss']
})
export class HeaderLogoComponent {
  public navTabs = navTabs;
}
