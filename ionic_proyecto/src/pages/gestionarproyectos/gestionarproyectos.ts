import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AñadirproyectoPage } from '../../pages/añadirproyecto/añadirproyecto'; 
import { BorrarproyectoPage } from '../../pages/borrarproyecto/borrarproyecto'; 
/**
 * Generated class for the GestionarproyectosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestionarproyectos',
  templateUrl: 'gestionarproyectos.html',
})
export class GestionarproyectosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionarproyectosPage');
  }


   borrarproyecto(){
		this.navCtrl.push(BorrarproyectoPage);
	}

	 meterproyecto(){
		this.navCtrl.push(AñadirproyectoPage);
	}

}
