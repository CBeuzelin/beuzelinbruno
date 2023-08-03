import { Component, ViewEncapsulation } from '@angular/core';
import IImage from "../shared/resources/interfaces/image.interface";

import images from 'src/assets/img/home-carousel/';
import { navLinks } from "../header/resources/constants/nav-link.constant";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  slides: IImage[] = images;
  contactLink = navLinks.contact;
  sections = [
    {
      icon: 'construction',
      title: 'Nos prestations',
      paragraphs: [
        { text: 'Conception, installation, entretien, SAV tout chauffage central', links: [] },
        { text: 'Conception, installation, entretien, SAV salle de bain, cuisine, sanitaire', links: [] }
      ]
    },
    {
      icon: 'group',
      title: 'Nos partenaires',
      paragraphs: [
        {
          text: 'Chauffage : ',
          links: [
            { label: 'Chappée', url: 'https://www.chappee.com/' },
            { label: 'Brotje', url: 'http://www.brotje.fr/' },
            { label: 'Ökofen', url: 'https://www.oekofen.com/fr-fr' }
          ]
        },
        {
          text: 'Poêle : ',
          links: [
            { label: 'Deville', url: 'https://www.deville.fr/' },
            { label: 'Godin', url: 'https://www.godin.fr/' },
          ]
        },
        {
          text: 'Salle de bain : ',
          links: [
            { label: 'Idéal Standard', url: 'http://www.idealstandard.fr/' },
            { label: 'Carlo Frattini', url: 'https://fimacf.com/fr/' },
            { label: 'Leda', url: 'https://leda.fr/' },
            { label: 'Kinedo', url: 'https://www.kinedo.com/' },
          ]
        }
      ]
    },
    {
      icon: 'plumbing',
      title: 'Autre savoir-faire',
      paragraphs: [
        { text: 'Chauffage piscine', links: [] },
        { text: 'Pompe de puits ou adduction d’eau', links: [] },
        { text: 'Réseau de lavage haute pression', links: [] },
        { text: 'Station de distribution privée de carburant', links: [] }
      ]
    }
  ];
}
