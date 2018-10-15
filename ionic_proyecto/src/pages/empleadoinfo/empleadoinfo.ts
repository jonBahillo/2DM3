import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-empleadoinfo',
  templateUrl: 'empleadoinfo.html',
})
export class EmpleadoinfoPage {

	Perfil;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  					afDB: AngularFireDatabase) {



  	this.Perfil=navParams.data.Empleados;
  	  
      console.log(this.Perfil);
      
  }

  	


  
  }



