import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleadoinfoPage } from './empleadoinfo';

@NgModule({
  declarations: [
    EmpleadoinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleadoinfoPage),
  ],
})
export class EmpleadoinfoPageModule {}
