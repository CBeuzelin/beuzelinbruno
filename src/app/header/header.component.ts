import { Component } from '@angular/core';
import { navTabs } from './resources/constants/nav-tab.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navTabs = navTabs;
  activeTab: string;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation())
    this.activeTab = 'Accueil';
  }
}
