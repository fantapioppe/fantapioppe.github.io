import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PronosticiPageRoutingModule } from './pronostici-routing.module';

import { PronosticiPage } from './pronostici.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PronosticiPageRoutingModule
  ],
  declarations: [PronosticiPage]
})
export class PronosticiPageModule {}
