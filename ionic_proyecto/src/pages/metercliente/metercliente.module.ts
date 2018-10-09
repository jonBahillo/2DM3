import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeterclientePage } from './metercliente';

@NgModule({
  declarations: [
    MeterclientePage,
  ],
  imports: [
    IonicPageModule.forChild(MeterclientePage),
  ],
})
export class MeterclientePageModule {}
