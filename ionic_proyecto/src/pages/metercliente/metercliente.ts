import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes';
/**
 * Generated class for the MeterclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metercliente',
  templateUrl: 'metercliente.html',
})
export class MeterclientePage {
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
  


  myInputNumber: number;
  Clientes:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  						public afDB: AngularFireDatabase) {

  	

  

  }

  btnAddClicked(Clientes){

    
    this.afDB.list("Clientes").push(/*this.usuarios*/
      {Apellido1: this.Apellido1,
       Apellido2: this.Apellido2,

      
       Cp: this.Cp,
       Date_mate: this.Date_mate,
       Direccion: this.Direccion,
       Nombre: this.Nombre,
       Nombre_Empresa: this.Nombre_Empresa,
       Pais: this.Pais,
       Provincia: this.Provincia
      });
    


    this.Clientes.Apellido1 ="";
    this.Clientes.Apellido2="";
    this.Clientes.Cp="";
    this.Clientes.Date_mate="";
    this.Clientes.Direccion="";
    this.Clientes.Nombre="";
    this.Clientes.Nombre_Empresa="";
    this.Clientes.Pais="";
    this.Clientes.Provincia="";
this.navCtrl.push(GestionclientesPage);

  }
	

}


