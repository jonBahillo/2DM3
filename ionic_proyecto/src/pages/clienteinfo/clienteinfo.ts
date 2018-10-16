import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
//import { EditarclientePage } from '../../pages/editarcliente/editarcliente';
import { EditarperfilPage } from '../../pages/editarperfil/editarperfil';
import { MeterclientePage } from '../../pages/metercliente/metercliente';
import { List } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { GestionclientesPage } from '../../pages/gestionclientes/gestionclientes'


@IonicPage()
@Component({
  selector: 'page-clienteinfo',
  templateUrl: 'clienteinfo.html',
})
export class ClienteinfoPage {
	//Clientes2: Observable<any[]>;
	Cliente2;
  
  i2;

 // Cliente: Observable<any[]>;
  llave = [];
  arrData = [];
  $key?:string;
  Nombre: string;
  num: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {

    //this.Cliente = this.navParams(Cliente);
    this.i2=navParams.data.i;
    console.log(navParams.data.i);
     this.Cliente2=navParams.data.Clientes;
     // console.log(this.Cliente);

      console.log(this.Nombre);
      //this.Clientes = afDB.list('/Clientes').valueChanges();
      
this.Cliente = afDB.list('Clientes').valueChanges();

  this.afDB.list('Clientes').snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);


    });
      


  }

  anadircliente(Clientes){
    
    this.navCtrl.push(MeterclientePage, { Clientes : Clientes });




  }


  borrarcliente(i2){
  console.log(i2);
  

      this.afDB.list('Clientes').remove(this.llave[i2].key);


   
}
//Esteban dijo que hicieramos asi el update
editarcliente(Clientes){


this.anadircliente(Clientes);

this.borrarcliente(this.i2);


}


    



}




