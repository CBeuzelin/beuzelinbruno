import { Component, ViewEncapsulation } from '@angular/core';
import { navTabs } from '../../resources/constants/nav-tab.constant';
import { ETheme } from '../../../shared/resources/enums/theme.enum';
import { ThemeService } from '../../../shared/resources/services/theme.service';

@Component({
  selector: 'app-header-tabs',
  templateUrl: './header-tabs.component.html',
  styleUrls: ['./header-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderTabsComponent {
  public theme: ETheme;
  public navTabs = navTabs;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme$.getValue();
  }
}
