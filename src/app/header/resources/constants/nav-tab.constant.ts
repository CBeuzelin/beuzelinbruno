import INavTab from '../interfaces/nav-tab.interface';
import { navLinks } from './nav-link.constant';

export const navTabs: INavTab[] = [
  {
    label: 'Accueil',
    link: `/${navLinks.home}`,
  },
  {
    label: 'Plomberie',
    subTabs: [
      {
        label: 'Plomberie / Sanitaire',
        link: `/${navLinks.plomberie._}/${navLinks.plomberie.plomberieSanitaire}`,
      },
      {
        label: 'Création / Rénovation salle de bain',
        link: `/${navLinks.plomberie._}/${navLinks.plomberie.creationRenovationSalleDeBain}`,
      }
    ]
  },
  {
    label: 'Chauffage',
    subTabs: [
      {
        label: 'Chaudières',
        link: `/${navLinks.chauffage._}/${navLinks.chauffage.chaudieres}`,
      },
      {
        label: 'Pompes à chaleur',
        link: `/${navLinks.chauffage._}/${navLinks.chauffage.pompesAChaleur}`,
      },
      {
        label: 'Chauffage au sol',
        link: `/${navLinks.chauffage._}/${navLinks.chauffage.chauffageAuSol}`,
      },
      {
        label: 'Poêles',
        link: `/${navLinks.chauffage._}/${navLinks.chauffage.poeles}`,
      }
    ]
  },
  {
    label: 'Contact',
    link: `/${navLinks.contact}`,
  },
]
