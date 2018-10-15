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

Empleados: Observable<any[]>;

items;


  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {
    this.Empleados = afDB.list('Empleados').valueChanges();
    this.initializeItems();
    
  }



  initializeItems() {
 this.items = [
      'Jon Bahillo Renero',
      'Bogota',
      'Buenos Aires',
      'Cairo'
    ];
}
  



getItems(ev) {
    // Reset items back to all of the items
     this.initializeItems();

    // set val to the value of the searchbar
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


verEmpleado(Empleados){
  this.navCtrl.push(VerperfilPage, { Empleados : Empleados });
}

}