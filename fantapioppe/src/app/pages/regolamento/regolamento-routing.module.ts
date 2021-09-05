import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegolamentoPage } from './regolamento.page';

const routes: Routes = [
  {
    path: '',
    component: RegolamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegolamentoPageRoutingModule {}
