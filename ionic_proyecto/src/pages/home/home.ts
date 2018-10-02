import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes';
import { GestionarempleadosPage } from '../../pages/gestionarempleados/gestionarempleados';
import { GestionarperfilesPage } from '../../pages/gestionarperfiles/gestionarperfiles';
import { GestionarproyectosPage } from '../../pages/gestionarproyectos/gestionarproyectos';
import { GestionarofertasPage } from '../../pages/gestionarofertas/gestionarofertas';
import { GestionarventasPage } from '../../pages/gestionarventas/gestionarventas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  	abrirPagina(){
		this.navCtrl.push(GestionarofertasPage);

	}

	abrirPagina2(){
		this.navCtrl.push(GestionarempleadosPage);

	}

	abrirPagina3(){
		this.navCtrl.push(GestionarventasPage);

	}

	abrirPagina4(){
		this.navCtrl.push(GestionarproyectosPage);

	}
	

	abrirPagina5(){
		this.navCtrl.push(GestionarperfilesPage);

	}

	abrirPagina6(){
		this.navCtrl.push(GestionclientesPage);

	}

}


