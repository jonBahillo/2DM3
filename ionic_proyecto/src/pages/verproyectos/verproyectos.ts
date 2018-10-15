import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProyectobuscadoPage } from '../../pages/proyectobuscado/proyectobuscado'

/**
 * Generated class for the VerproyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verproyectos',
  templateUrl: 'verproyectos.html',
})
export class VerproyectosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerproyectosPage');
  }
abrirPagina11(){
		this.navCtrl.push(ProyectobuscadoPage);
	}
}
