import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PlomberieSanitaireComponent } from './plomberie/plomberie-sanitaire/plomberie-sanitaire.component';
import {
  CreationRenovationSalleDeBainComponent
} from './plomberie/creation-renovation-salle-de-bain/creation-renovation-salle-de-bain.component';
import { ChaudieresComponent } from './chauffage/chaudieres/chaudieres.component';
import { PompesAChaleurComponent } from './chauffage/pompes-a-chaleur/pompes-a-chaleur.component';
import { ChauffageAuSolComponent } from './chauffage/chauffage-au-sol/chauffage-au-sol.component';
import { PoelesComponent } from './chauffage/poeles/poeles.component';

import { navLinks } from './header/resources/constants/nav-link.constant';

const routes: Routes = [
  { path: navLinks.home, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: navLinks.plomberie._,
    children: [
      { path: navLinks.plomberie.plomberieSanitaire, component: PlomberieSanitaireComponent },
      { path: navLinks.plomberie.creationRenovationSalleDeBain, component: CreationRenovationSalleDeBainComponent },
    ]
  },
  {
    path: navLinks.chauffage._,
    children: [
      { path: navLinks.chauffage.chaudieres, component: ChaudieresComponent },
      { path: navLinks.chauffage.pompesAChaleur, component: PompesAChaleurComponent },
      { path: navLinks.chauffage.chauffageAuSol, component: ChauffageAuSolComponent },
      { path: navLinks.chauffage.poeles, component: PoelesComponent },
    ]
  },
  { path: navLinks.contact, component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
