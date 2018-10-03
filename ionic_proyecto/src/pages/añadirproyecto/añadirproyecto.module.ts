import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AñadirproyectoPage } from './añadirproyecto';

@NgModule({
  declarations: [
    AñadirproyectoPage,
  ],
  imports: [
    IonicPageModule.forChild(AñadirproyectoPage),
  ],
})
export class AñadirproyectoPageModule {}
