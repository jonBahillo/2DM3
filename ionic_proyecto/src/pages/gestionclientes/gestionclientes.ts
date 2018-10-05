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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,afDB: AngularFireDatabase) {

	this.Clientes = afDB.list('Clientes').valueChanges();


  }



  verinfocliente(Clientes){
		        this.navCtrl.push(ClienteinfoPage, { Clientes : Clientes });

	}

}
