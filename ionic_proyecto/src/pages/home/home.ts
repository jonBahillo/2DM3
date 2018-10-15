import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes';
import { GestionarempleadosPage } from '../../pages/gestionarempleados/gestionarempleados';
import { GestionarperfilesPage } from '../../pages/gestionarperfiles/gestionarperfiles';
import { GestionarproyectosPage } from '../../pages/gestionarproyectos/gestionarproyectos';
import { GestionarofertasPage } from '../../pages/gestionarofertas/gestionarofertas';
import { GestionarventasPage } from '../../pages/gestionarventas/gestionarventas';
import { FaltafuncionalidadPage } from '../../pages/faltafuncionalidad/faltafuncionalidad';
import { LoginPage } from '../../pages/login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	faltafuncionalidad(){
		this.navCtrl.push(FaltafuncionalidadPage);

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
	salir(){
		this.navCtrl.push(LoginPage);
		location.reload();
	}

}


