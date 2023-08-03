import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ResponsiveService } from './shared/resources/services/responsive.service';
import { HeaderModule } from './header/header.module';
import { ThemeService } from './shared/resources/services/theme.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    MatTabsModule,
  ],
  providers: [ResponsiveService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
