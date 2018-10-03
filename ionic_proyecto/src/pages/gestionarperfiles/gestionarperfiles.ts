import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BorrarperfilPage } from '../../pages/borrarperfil/borrarperfil';
import { AñadirperfilPage } from '../../pages/añadirperfil/añadirperfil'; 
/**
 * Generated class for the GestionarperfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestionarperfiles',
  templateUrl: 'gestionarperfiles.html',
})
export class GestionarperfilesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionarperfilesPage');
  }

   borrarusuario(){
		this.navCtrl.push(BorrarperfilPage);
	}

	 meterusuario(){
		this.navCtrl.push(AñadirperfilPage);
	}

}
