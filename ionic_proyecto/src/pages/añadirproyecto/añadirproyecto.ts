import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { GestionarproyectosPage } from '../../pages/gestionarproyectos/gestionarproyectos';
/**
 * Generated class for the AñadirproyectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-añadirproyecto',
  templateUrl: 'añadirproyecto.html',
})
export class AñadirproyectoPage {
/*********Declaramos todos los campos de la tabla proyecto y el array proyecto****************/
  arrData = [];
  $key?:string;
  NombreP: string;
  Date_mante: any;
  Desc: string;
  Status: string;
  llave = [];


	Proyecto:any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
  						public afDB: AngularFireDatabase) {




  }

/***********Funcion boton de añadir proyecto***************************/
btnAddClicked3(Proyecto){

    
    this.afDB.list("Proyecto").push(/*this.usuarios*/
      {NombreP: this.NombreP,
       Date_mante: this.Date_mante,
       Desc: this.Desc,
       Status: this.Status
       
      });
    


    this.Proyecto.NombreP ="";
    this.Proyecto.Date_mante="";
    this.Proyecto.Desc="";
    this.Proyecto.Status="";
    
	this.navCtrl.push(GestionarproyectosPage);

  }

}
