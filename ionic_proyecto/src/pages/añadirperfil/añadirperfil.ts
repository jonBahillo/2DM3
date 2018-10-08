import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

/**
 * Generated class for the AñadirperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-añadirperfil',
  templateUrl: 'añadirperfil.html',
})
export class AñadirperfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
  }

  this.Empleados = afDB.list('Empleados').valueChanges();

	this.afDB.list("Empleados").valueChanges().subscribe(_data =>{
  		this.arrData = _data;

  		console.log(this.arrData);
  	});
  }

  btnAddClicked(Empleados){

    console.log(Empleados);
    this.afDB.list("Empleados").push(/*this.usuarios*/
      {Apellido1: this.Empleados.Apellido1,
       Apellido2: this.Empleados.Apellido2,
       Cp: this.Empleados.Cp,
       Date_mante: this.Empleados.Date_mante,
       Direccion: this.Empleados.Direccion,
       ID_Cliente: this.Empleados.ID_Cliente,
       Nombre: this.Empleados.Nombre,
       Nombre_Empresa: this.Empleados.Nombre_Empresa,
       Pais: this.Empleados.Pais,
       Provincia: this.Empleados.Provincia
      });
    this.Empleados.Apellido1 ="";
    this.Empleados.Apellido2="";
    this.Empleados.Cp="";
    this.Empleados.Date_mante="";
    this.Empleados.Direccion="";
    this.Empleados.ID_Cliente="";
    this.Empleados.Nombre="";
    this.Empleados.Nombre_Empresa="";
    this.Empleados.Pais="";
    this.Empleados.Provincia="";
  }


}
