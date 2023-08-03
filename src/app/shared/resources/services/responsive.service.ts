import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EResponsiveClass } from '../enums/responsive-class.enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable()
export class ResponsiveService {
  public responsiveClass$: BehaviorSubject<EResponsiveClass>;

  constructor(public bo: BreakpointObserver) {
      this.responsiveClass$ = new BehaviorSubject<EResponsiveClass>(EResponsiveClass.WEB_PORTRAIT);

    this.bo.observe([
      Breakpoints.HandsetPortrait, // (max-width: 599.98px) and (orientation: portrait)
      Breakpoints.HandsetLandscape, // (max-width: 959.98px) and (orientation: landscape)

      Breakpoints.TabletPortrait, // (min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)
      Breakpoints.TabletLandscape, // (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)

      Breakpoints.WebPortrait, // (min-width: 840px) and (orientation: portrait)
      Breakpoints.WebLandscape, // (min-width: 1280px) and (orientation: landscape)
    ])
      .subscribe(result => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.responsiveClass$.next(EResponsiveClass.HANDSET_PORTRAIT);
        } else if (breakpoints[Breakpoints.HandsetLandscape] || breakpoints[Breakpoints.TabletPortrait]) {
          this.responsiveClass$.next(EResponsiveClass.TABLET_PORTRAIT);
        } else if (breakpoints[Breakpoints.TabletLandscape] || breakpoints[Breakpoints.WebPortrait]) {
          this.responsiveClass$.next(EResponsiveClass.WEB_PORTRAIT);
        } else if (breakpoints[Breakpoints.WebLandscape]) {
          this.responsiveClass$.next(EResponsiveClass.WEB_LANDSCAPE);
        }
      });
  }
}
