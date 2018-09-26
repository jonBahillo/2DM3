import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { DatosProvider } from '../../providers/datos/datos';


@IonicPage()
@Component({
  selector: 'page-salida',
  templateUrl: 'salida.html',
})
export class SalidaPage {
item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalidaPage');
  }

  showConfirm() {
      const confirm = this.alertCtrl.create({
        title: '¿Quieres participar?',
        message: '¿Quieres enviar el curriculum para poder participar?',
        buttons: [
          {
            text: 'CANCELAR',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'SI',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
    }

}
