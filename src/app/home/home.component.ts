import { Component, ViewEncapsulation } from '@angular/core';
import IImage from "../shared/resources/interfaces/image.interface";

import images from 'src/assets/img/home-carousel/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  slides: IImage[];

  constructor() {
    this.slides = images;
  }
}
