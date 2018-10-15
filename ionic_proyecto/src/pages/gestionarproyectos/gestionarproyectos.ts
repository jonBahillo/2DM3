import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AñadirproyectoPage } from '../../pages/añadirproyecto/añadirproyecto'; 
import { BorrarproyectoPage } from '../../pages/borrarproyecto/borrarproyecto';
import { ProyectoinfoPage } from '../../pages/proyectoinfo/proyectoinfo';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-gestionarproyectos',
  templateUrl: 'gestionarproyectos.html',
})
export class GestionarproyectosPage {
/*Creamos array para proyectos*/
    ProyectosName: Observable<any[]>;
    llave = [];
    arrData = [];
    $key?:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
                    public afDB: AngularFireDatabase) {

    /*Cargamos datos d ela tabla proyecto*/
    this.ProyectosName = afDB.list('Proyecto').valueChanges();


    this.afDB.list("Proyecto").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);


    });
  }


/************FUNCIONES BOTONES****************************/

  verinfoproyecto(Proyecto){
            this.navCtrl.push(ProyectoinfoPage, { Proyecto : Proyecto });

  }

   anadirproyecto(Proyecto){
    
    this.navCtrl.push(AñadirproyectoPage, { Proyecto : Proyecto });
    //console.log(this.Proyecto);

  }


    borrarproyecto(i){
  
  
      this.afDB.list("Proyecto").remove(this.llave[i].key);
      
     alert("Proyecto borrado");
   
}




}
