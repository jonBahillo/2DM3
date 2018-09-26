import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalidaPage } from '../salida/salida';

import { DatosProvider } from '../../providers/datos/datos';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


 
  constructor(public datos: DatosProvider, public navCtrl: NavController) {


    
  }
  abrirpagina(item){
    this.navCtrl.push(SalidaPage, {item:item});
  }

}
