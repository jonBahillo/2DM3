import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { ClienteinfoPage } from '../../pages/clienteinfo/clienteinfo'
/**
 * Generated class for the EditarperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editarperfil',
  templateUrl: 'editarperfil.html',
})
export class EditarperfilPage {
	Clientes2: Observable<any[]>;
	Cliente;
	arrData = [];
	aEditar = [];
  /*creamos una variable, que es la utilizada por firebase para poder identificar los registros. 
  Ponemos el simbolo de pregunta para poder decir que este campo con es obligatorio introducirlo. 
  Firebase lo identifica. */
  $key?:string;
  Nombre: string;
  Apellido1: string;
  Apellido2: string;
  Direccion: string;
  CP: number;
  Date_mante: string;
  Nombre_empresa: string;
  Pais: string;
  Provincia: string;

  usuarios:any = [];
  llave = [];
  item;


  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
 	
   this.Empleados = afDB.list('Clientes').valueChanges();
 
this.item = navParams.data.i;
this.Clientes2=navParams.data.Cliente;


this.afDB.list("Clientes").valueChanges().subscribe(_data =>{
      this.arrData = _data;
this.aEditar=(this.arrData[this.item]);


      console.log(this.aEditar);
  });
   /* this.afDB.list("Clientes").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);

    });*/
  	/*this.Cliente=navParams.data.Clientes;
      console.log(this.Cliente);*/
  }


btnUpdate(aEditar){


   /* console.log(aEditar);
    this.afDB.("myUsers").update(
      {myInputName: this.usuarios.myInputName,
       myInputNumber: this.usuarios.myInputNumber
      });*/

  this.afDB.database.ref("Clientes/"+aEditar.item).set(aEditar);
  console.log(this.item);
  this.navCtrl.push(ClienteinfoPage);
  

}
}