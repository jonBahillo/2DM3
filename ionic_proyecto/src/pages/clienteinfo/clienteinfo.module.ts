import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteinfoPage } from './clienteinfo';

@NgModule({
  declarations: [
    ClienteinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteinfoPage),
  ],
})
export class ClienteinfoPageModule {}
