import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EResponsiveClass } from './shared/resources/enums/responsive-class.enum';
import { ResponsiveService } from './shared/resources/services/responsive.service';
import { ThemeService } from './shared/resources/services/theme.service';
import { ETheme } from './shared/resources/enums/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public theme: ETheme;
  public responsive: EResponsiveClass | undefined;

  constructor(private responsiveService: ResponsiveService, private themeService: ThemeService) {
    this.theme = this.themeService.theme$.getValue();
  }

  ngOnInit() {
    this.responsiveService.responsiveClass$.subscribe(next => this.responsive = next);
  }
}
