import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
/**
 * Generated class for the ProyectoinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proyectoinfo',
  templateUrl: 'proyectoinfo.html',
})
export class ProyectoinfoPage {
	Proyectos;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  					afDB: AngularFireDatabase) {



  		this.Proyectos=navParams.data.Proyecto;
  	  
      	//console.log(this.Proyectos);
  }

 

}
