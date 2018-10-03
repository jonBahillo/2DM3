import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


@Component({
  templateUrl: 'busquedaempleados.html'
})
export class BusquedaempleadosPage {
  Nombres: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public serDatos: DatosProvider, afDB: AngularFireDatabase) {
    
this.Nombres = afDB.list('Empleados').valueChanges();
    
  }



}