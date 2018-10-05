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

  constructor(public navCtrl: NavController, public navParams: NavParams,afDB: AngularFireDatabase) {
 	
  	this.Cliente=navParams.data.Clientes;
      console.log(this.Cliente);

  }

 

}
