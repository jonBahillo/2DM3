import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteinfoPage } from '../../pages/clienteinfo/clienteinfo'
import { MeterclientePage } from '../../pages/metercliente/metercliente';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
   


@IonicPage()
@Component({
  selector: 'page-gestionclientes',
  templateUrl: 'gestionclientes.html',
})
export class GestionclientesPage {
  Clientes2: Observable<any[]>;
  llave = [];
  arrData = [];
  $key?:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  				public afDB: AngularFireDatabase) {

	this.Clientes2 = afDB.list('Clientes').valueChanges();/****Cargamos datos del firebase de la tabla clientes******/

	this.afDB.list("Clientes").snapshotChanges().subscribe(_data =>{/*****Cogemos la key de cada campo de la tabla clientes ****/
      this.llave = _data;
      console.log(this.llave);


    });


  }

/************FUNCIONES BOTONES Y pasar datos a  paginaa*******************/

 verinfocliente(Clientes){
		        this.navCtrl.push(ClienteinfoPage, { Clientes : Clientes });

	}


	anadircliente(Clientes){
		
		this.navCtrl.push(MeterclientePage, { Clientes : Clientes });
		//console.log(this.Clientes);

	}


	borrarcliente(i){
 	
  
      this.afDB.list("Clientes").remove(this.llave[i].key);
      
     alert("Cliente borrado");
   
}

  salir2(){
    this.navCtrl.push(LoginPage);
    location.reload();/*REFRESCA LA PAGINA*/

  }


}
