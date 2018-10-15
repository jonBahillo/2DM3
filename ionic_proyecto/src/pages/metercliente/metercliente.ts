 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes';


@IonicPage()
@Component({
  selector: 'page-metercliente',
  templateUrl: 'metercliente.html',
})
export class MeterclientePage {
  /********************/
  /**Declaramos todos los campos de la tabla cliente y creamos el array cliente**/
  arrData = [];
  $key?:string;
  Apellido1: string;
  Apellido2: string;
  Cp: number;
  Date_mante: any;
  Direccion: string;
  Nombre: string;
  Nombre_Empresa: string;
  Pais: string;
  Provincia: string;
  llave = [];
  


 
  Clientes:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  						public afDB: AngularFireDatabase) {



  

  }
  /**********FUNCION AÑADIR cliente*******************/

  btnAddClicked(Clientes){

    
    this.afDB.list("Clientes").push(/*this.usuarios*/
      {Apellido1: this.Apellido1,
       Apellido2: this.Apellido2,
       Cp: this.Cp,
       Date_mate: this.Date_mante,
       Direccion: this.Direccion,
       Nombre: this.Nombre,
       Nombre_Empresa: this.Nombre_Empresa,
       Pais: this.Pais,
       Provincia: this.Provincia
      });
    


    this.Clientes.Apellido1 ="";
    this.Clientes.Apellido2="";
    this.Clientes.Cp="";
    this.Clientes.Date_mante="";
    this.Clientes.Direccion="";
    this.Clientes.Nombre="";
    this.Clientes.Nombre_Empresa="";
    this.Clientes.Pais="";
    this.Clientes.Provincia="";
	this.navCtrl.push(GestionclientesPage);

  }
	

}


