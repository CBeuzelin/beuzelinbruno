import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from "@coreui/angular";
import { HomeRoutingModule } from "./home-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { NgScrollbarModule} from "ngx-scrollbar";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    MatIconModule,
    NgScrollbarModule,
  ]
})
export class HomeModule {}
