import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionclientesPage } from './gestionclientes';

@NgModule({
  declarations: [
    GestionclientesPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionclientesPage),
  ],
})
export class GestionclientesPageModule {}
