import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SalidaPage } from '../salida/salida';
import { UltimaPage } from '../ultima/ultima';
import { DatosProvider } from '../../providers/datos/datos';
//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public datos: DatosProvider, public navCtrl: NavController, public storage:Storage) {



  }
  abrirpagina(item){
    this.navCtrl.push(SalidaPage, {item:item});
  }
  salirVentana(){
  this.navCtrl.push(UltimaPage);
}

}
