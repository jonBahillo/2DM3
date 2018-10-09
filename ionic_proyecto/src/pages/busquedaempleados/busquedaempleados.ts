import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { VerperfilPage } from '../../pages/verperfil/verperfil';



@Component({
  templateUrl: 'busquedaempleados.html'
})
export class BusquedaempleadosPage {

Empleados;



  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.Empleados = afDB.list('Empleados').valueChanges();
    
  }

verEmpleado(Empleados){
  this.navCtrl.push(VerperfilPage, {Empleados : Empleados});
}

}