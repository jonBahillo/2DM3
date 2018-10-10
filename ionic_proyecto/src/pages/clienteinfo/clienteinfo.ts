import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
//import { EditarclientePage } from '../../pages/editarcliente/editarcliente';
import { EditarperfilPage } from '../../pages/editarperfil/editarperfil';

@IonicPage()
@Component({
  selector: 'page-clienteinfo',
  templateUrl: 'clienteinfo.html',
})
export class ClienteinfoPage {
	//Clientes2: Observable<any[]>;
	Cliente;
  
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {

    //this.Cliente = this.navParams(Cliente);
    this.item=navParams.data.i;
    console.log(this.i);
      this.Cliente=navParams.data.Clientes;
      console.log(this.Cliente);
      //this.Clientes = afDB.list('/Clientes').valueChanges();
      

      

  }

editarcliente(Cliente, i){

  this.navCtrl.push(EditarperfilPage, {Cliente:Cliente}, {i:i});
      console.log(this.i);
}
     


}




