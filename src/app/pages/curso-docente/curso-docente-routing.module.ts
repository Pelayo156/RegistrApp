import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDocentePage } from './curso-docente.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDocentePageRoutingModule {}
