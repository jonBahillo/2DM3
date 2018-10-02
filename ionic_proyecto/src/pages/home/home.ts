import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  	abrirPagina(){
		this.navCtrl.push(GestionclientesPage);

	}

}


