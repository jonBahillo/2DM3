import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VernotificacionesPage } from '../../pages/vernotificaciones/vernotificaciones';
import { VerperfilPage } from '../../pages/verperfil/verperfil';
import { VerproyectosPage } from '../../pages/verproyectos/verproyectos';
import { BusquedaempleadosPage } from '../../pages/busquedaempleados/busquedaempleados';
import { DatosProvider } from '../../providers/datos/datos';

/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public serDatos: DatosProvider) {
  }

abrirPagina7(){
		this.navCtrl.push(VernotificacionesPage);
	}
	abrirPagina8(){
		this.navCtrl.push(VerperfilPage);
	}
	abrirPagina9(){
		this.navCtrl.push(VerproyectosPage);
	}
	abrirPagina10(){
		this.navCtrl.push(BusquedaempleadosPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home2Page');
  }

}
