import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HeaderWebComponent } from './header-devices/header-web/header-web.component';
import { HeaderHandsetComponent } from './header-devices/header-handset/header-handset.component';
import { HeaderTabletComponent } from './header-devices/header-tablet/header-tablet.component';
import { HeaderTabsComponent } from './header-content/header-tabs/header-tabs.component';
import { HeaderLogoComponent } from './header-content/header-logo/header-logo.component';
import { HeaderContactComponent } from './header-content/header-contact/header-contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderWebComponent,
    HeaderHandsetComponent,
    HeaderTabletComponent,
    HeaderTabsComponent,
    HeaderLogoComponent,
    HeaderContactComponent
  ],
  exports: [
    HeaderComponent,
    HeaderWebComponent,
    HeaderHandsetComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class HeaderModule { }
