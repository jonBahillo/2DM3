import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
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
  /*creamos una variable, que es la utilizada por firebase para poder identificar los registros. 
  Ponemos el simbolo de pregunta para poder decir que este campo con es obligatorio introducirlo. 
  Firebase lo identifica. */
  $key?:string;
  Nombre: string;
  Apellido1: string;
  Apellido2: string;
  Direccion: string;
  CP: number;
  Date_mante: date;
  Nombre_empresa: string;
  Pais: string;
  Provincia: string;

  usuarios:any = [];
  llave = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
 	
  	 this.afDB.list("myUsers").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
  });
    this.afDB.list("myUsers").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);

    });
  	this.Cliente=navParams.data.Clientes;
      console.log(this.Cliente);



  }

 

}
