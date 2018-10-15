import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProyectoinfoPage } from './proyectoinfo';

@NgModule({
  declarations: [
    ProyectoinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProyectoinfoPage),
  ],
})
export class ProyectoinfoPageModule {}
