import { Component, Input, ViewEncapsulation } from '@angular/core';
import { navTabs } from './resources/constants/nav-tab.constant';
import { Router } from '@angular/router';
import { MatTabNavPanel } from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Input()
  public tabPanel: MatTabNavPanel | undefined;

  navTabs = navTabs;
  activeTab: string;
  public theme = 'light-theme';

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation())
    this.activeTab = 'Accueil';
  }
}
