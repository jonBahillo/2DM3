import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-salida',
  templateUrl: 'salida.html',
})
export class SalidaPage {
item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalidaPage');
  }

}
