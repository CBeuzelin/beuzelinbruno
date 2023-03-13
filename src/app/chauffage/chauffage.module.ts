import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaudieresComponent } from './chaudieres/chaudieres.component';
import { PompesAChaleurComponent } from './pompes-a-chaleur/pompes-a-chaleur.component';
import { ChauffageAuSolComponent } from './chauffage-au-sol/chauffage-au-sol.component';
import { PoelesComponent } from './poeles/poeles.component';

@NgModule({
  declarations: [
    ChaudieresComponent,
    PompesAChaleurComponent,
    ChauffageAuSolComponent,
    PoelesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ChauffageModule { }
