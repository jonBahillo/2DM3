import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { DatosProvider } from '../../providers/datos/datos';
/**
 * Generated class for the VerperfilpropioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verperfilpropio',
  templateUrl: 'verperfilpropio.html',
})
export class VerperfilpropioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public datos: DatosProvider, afDB: AngularFireDatabase) {

  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerperfilpropioPage');
  }

}
