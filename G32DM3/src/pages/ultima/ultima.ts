import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
/**
 * Generated class for the UltimaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ultima',
  templateUrl: 'ultima.html',
})
export class UltimaPage {

  constructor(public navCtrl: NavController,
    	public navParams: NavParams,
    	public datos: DatosProvider) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UltimaPage');
  }

}
