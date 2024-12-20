import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDocentePageRoutingModule } from './curso-docente-routing.module';

import { CursoDocentePage } from './curso-docente.page';
import  { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  imports: [QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDocentePageRoutingModule,
    QRCodeModule,

  ]
  ,
  declarations: [CursoDocentePage]
})
export class CursoDocentePageModule {}
