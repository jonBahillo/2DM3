import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { GestionarperfilesPage } from '../../pages/gestionarperfiles/gestionarperfiles';

@IonicPage()
@Component({
  selector: 'page-añadirperfil',
  templateUrl: 'añadirperfil.html',
})
export class AñadirperfilPage {

  arrData = [];
  $key?:string;
  Apellido1: string;
  Apellido2: string;
  CP: number;
  Direccion: string;
  Nombre: string;
  DNI: string;
  Pais: string;
  Provincia: string;
  Puesto: string;
  password: string;
  llave = [];
  


 
  Empleados:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  					public afDB: AngularFireDatabase) {



  }


btnAddClicked2(Empleados){

    
    this.afDB.list("Empleados").push(/*this.usuarios*/
      {Apellido1: this.Apellido1,
       Apellido2: this.Apellido2,
       CP: this.CP,
       Direccion: this.Direccion,
       Nombre: this.Nombre,
       DNI: this.DNI,
       Pais: this.Pais,
       Provincia: this.Provincia,
       Puesto: this.Puesto,
       password: this.password
      });
    


    this.Empleados.Apellido1 ="";
    this.Empleados.Apellido2="";
    this.Empleados.CP="";
    this.Empleados.Direccion="";
    this.Empleados.Nombre="";
    this.Empleados.DNI="";
    this.Empleados.Pais="";
    this.Empleados.Provincia="";
    this.Empleados.Puesto="";
    this.Empleados.password="";
	this.navCtrl.push(GestionarperfilesPage);

  }






}
