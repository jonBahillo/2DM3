import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteinfoPage } from '../../pages/clienteinfo/clienteinfo'


@IonicPage()
@Component({
  selector: 'page-gestionclientes',
  templateUrl: 'gestionclientes.html',
})
export class GestionclientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionclientesPage');
  }

  verinfocliente1(){
		this.navCtrl.push(ClienteinfoPage);
	}
	 verinfocliente2(){
		this.navCtrl.push(ClienteinfoPage);
	}
	 verinfocliente3(){
		this.navCtrl.push(ClienteinfoPage);
	}
	 verinfocliente4(){
		this.navCtrl.push(ClienteinfoPage);
	}

}
