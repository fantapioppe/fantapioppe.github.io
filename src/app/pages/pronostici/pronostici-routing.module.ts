import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PronosticiPage } from './pronostici.page';

const routes: Routes = [
  {
    path: '',
    component: PronosticiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronosticiPageRoutingModule {}
