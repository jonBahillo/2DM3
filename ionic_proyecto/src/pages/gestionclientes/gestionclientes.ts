import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteinfoPage } from '../../pages/clienteinfo/clienteinfo'
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
   


@IonicPage()
@Component({
  selector: 'page-gestionclientes',
  templateUrl: 'gestionclientes.html',
})
export class GestionclientesPage {
  Clientes2: Observable<any[]>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public afDB: AngularFireDatabase) {

	this.Clientes = afDB.list('Clientes').valueChanges();

	this.afDB.list("Clientes").valueChanges().subscribe(_data =>{
  		this.arrData = _data;

  		console.log(this.arrData);
  	});
  }


btnAddClicked(Clientes){

    console.log(Clientes);
    this.afDB.list("Clientes").push(/*this.usuarios*/
      {Apellido1: this.Clientes.Apellido1,
       Apellido2: this.Clientes.Apellido2,
       Cp: this.Clientes.Cp,
       Date_mante: this.Clientes.Date_mante,
       Direccion: this.Clientes.Direccion,
       ID_Cliente: this.Clientes.ID_Cliente,
       Nombre: this.Clientes.Nombre,
       Nombre_Empresa: this.Clientes.Nombre_Empresa,
       Pais: this.Clientes.Pais,
       Provincia: this.Clientes.Provincia
      });
    this.Clientes.Apellido1 ="";
    this.Clientes.Apellido2="";
    this.Clientes.Cp="";
    this.Clientes.Date_mante="";
    this.Clientes.Direccion="";
    this.Clientes.ID_Cliente="";
    this.Clientes.Nombre="";
    this.Clientes.Nombre_Empresa="";
    this.Clientes.Pais="";
    this.Clientes.Provincia="";
  }




  verinfocliente(Clientes){
		        this.navCtrl.push(ClienteinfoPage, { Clientes : Clientes });

	}


	anadircliente(Clientes){

   var Clientenuevo ={
        Apellido1="ramon",
        Apellido2="as",
        Cp="1234",
        Date_mante="23/09/12345",
        Direccion="dsdfsd",
        ID_Cliente="20",
        Nombre="ajajaj",
       Nombre_Empresa="dasffg",
       Pais="dasdsf",
       Provincia="dierna"

      }
       this.Clientes = afDB.list('/Clientes/').push(Clientenuevo);

}



}
