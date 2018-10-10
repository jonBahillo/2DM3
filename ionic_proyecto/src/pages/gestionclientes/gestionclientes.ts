import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteinfoPage } from '../../pages/clienteinfo/clienteinfo'
import { MeterclientePage } from '../../pages/metercliente/metercliente';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { List } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
   


@IonicPage()
@Component({
  selector: 'page-gestionclientes',
  templateUrl: 'gestionclientes.html',
})
export class GestionclientesPage {
  Clientes2: Observable<any[]>;
  llave = [];
  arrData = [];
  $key?:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  				public afDB: AngularFireDatabase) {

	this.Clientes2 = afDB.list('Clientes').valueChanges();

	this.afDB.list("Clientes").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);


    });


  }



 verinfocliente(Clientes, i){
		        this.navCtrl.push(ClienteinfoPage, { Clientes : Clientes }, { i:i });

	}


	anadircliente(Clientes){
		
		this.navCtrl.push(MeterclientePage, { Clientes : Clientes });
		console.log(this.Clientes);

	}


	borrarcliente(i){
 	console.log(i);
  
      //tenemos que pasar un parametro de eliminacion.
      //this.afDB.list("myUsers").remove(usuarios[i]);
      this.afDB.list("Clientes").remove(this.llave[i].key);
      //console.log(this.Clientes2[i].key);
      //this.afDB.list("/myUsers/").remove(this.arrData[usuarios].$key);
      //this.afDB.collection('/myUsers/${ this.arrData[usuarios].$key }').remove();
     alert("Cliente borrado");
   
}



}
