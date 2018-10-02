import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuarios:any;
  correo:string = "";
  contrasena:string= "";
  titulo="Autentificate";
  ocultar = false;
  boton = true;
  items:any []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	

  }

  registrar(){
  console.log(this.correo);
  console.log(this.contrasena);
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
}