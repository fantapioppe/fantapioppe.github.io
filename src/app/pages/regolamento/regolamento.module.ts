import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegolamentoPageRoutingModule } from './regolamento-routing.module';

import { RegolamentoPage } from './regolamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegolamentoPageRoutingModule
  ],
  declarations: [RegolamentoPage]
})
export class RegolamentoPageModule {}
