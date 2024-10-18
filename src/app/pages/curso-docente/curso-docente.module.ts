import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDocentePageRoutingModule } from './curso-docente-routing.module';

import { CursoDocentePage } from './curso-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDocentePageRoutingModule
  ],
  declarations: [CursoDocentePage]
})
export class CursoDocentePageModule {}
