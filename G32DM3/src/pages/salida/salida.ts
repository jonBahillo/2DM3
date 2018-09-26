import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UltimaPage } from '../ultima/ultima';
import { DatosProvider } from '../../providers/datos/datos';


@IonicPage()
@Component({
  selector: 'page-salida',
  templateUrl: 'salida.html',
})
export class SalidaPage {
item;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage:Storage,public datos: DatosProvider) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalidaPage');
  }

  showConfirm(item:any) {
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
              this.datos.bandeja.push(item);
              this.datos.guardar_productos()
              console.log(this.item);
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
    }

}
