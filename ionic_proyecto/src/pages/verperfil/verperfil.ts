import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { DatosProvider } from '../../providers/datos/datos';

/**
 * Generated class for the VerperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verperfil',
  templateUrl: 'verperfil.html',
})
export class VerperfilPage {

Empleado:Observable<any[]>;
item;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public afDB: AngularFireDatabase,
  	 public datos: DatosProvider) {

  	
  	  this.Empleado=navParams.data.Empleados;
  	  console.log(this.Empleado);

  }

}
