import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ETheme } from '../enums/theme.enum';

@Injectable()
export class ThemeService {
  public theme$: BehaviorSubject<ETheme>;

  constructor() {
      this.theme$ = new BehaviorSubject<ETheme>(ETheme.LIGHT_THEME);
  }
}
