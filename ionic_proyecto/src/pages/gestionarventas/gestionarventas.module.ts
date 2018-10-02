import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionarventasPage } from './gestionarventas';

@NgModule({
  declarations: [
    GestionarventasPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionarventasPage),
  ],
})
export class GestionarventasPageModule {}
