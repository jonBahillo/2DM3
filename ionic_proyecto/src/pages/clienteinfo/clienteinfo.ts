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
	Clientes2: Observable<any[]>;
	Cliente;


  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {

    //this.Cliente = this.navParams(Cliente);
      this.Cliente=navParams.data.Clientes;
      console.log(this.Cliente);
      //this.Clientes = afDB.list('/Clientes').valueChanges();
      

      

  }

editarcliente(Clientes){

  this.navCtrl.push(EditarperfilPage,{Clientes : Clientes});
}
     

}


