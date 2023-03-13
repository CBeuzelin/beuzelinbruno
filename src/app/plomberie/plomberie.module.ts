import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlomberieSanitaireComponent } from './plomberie-sanitaire/plomberie-sanitaire.component';
import { CreationRenovationSalleDeBainComponent } from './creation-renovation-salle-de-bain/creation-renovation-salle-de-bain.component';

@NgModule({
  declarations: [
    PlomberieSanitaireComponent,
    CreationRenovationSalleDeBainComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PlomberieModule { }
