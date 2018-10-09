import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VernotificacionesPage } from '../../pages/vernotificaciones/vernotificaciones';
import { VerperfilPage } from '../../pages/verperfil/verperfil';
import { VerproyectosPage } from '../../pages/verproyectos/verproyectos';
import { BusquedaempleadosPage } from '../../pages/busquedaempleados/busquedaempleados';
import { DatosProvider } from '../../providers/datos/datos';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { VerperfilpropioPage } from '../../pages/verperfilpropio/verperfilpropio';

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

  Empleados: Observable<any[]>;
  Dato;


  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {


  this.Empleados = afDB.list('Empleados').valueChanges();
  this.Dato=navParams.data.arreglo;
  console.log(this.Empleados);
  console.log(this.Dato);

  }

abrirPagina7(){
		this.navCtrl.push(VernotificacionesPage);
	}
	verEmpleado(Empleados){
  		this.navCtrl.push(VerperfilpropioPage, {Empleados : Empleados}) ;
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
