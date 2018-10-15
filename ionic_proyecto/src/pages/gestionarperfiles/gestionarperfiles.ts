import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BorrarperfilPage } from '../../pages/borrarperfil/borrarperfil';
import { EmpleadoinfoPage } from '../../pages/empleadoinfo/empleadoinfo'; 
import { AñadirperfilPage } from '../../pages/añadirperfil/añadirperfil';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'; 
import { LoginPage } from '../../pages/login/login';


@IonicPage()
@Component({
  selector: 'page-gestionarperfiles',
  templateUrl: 'gestionarperfiles.html',
})
export class GestionarperfilesPage {
  Perfiles: Observable<any[]>;
  llave = [];
  arrData = [];
  $key?:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
                    public afDB: AngularFireDatabase) {

    this.Perfiles = afDB.list('Empleados').valueChanges();

    this.afDB.list("Empleados").snapshotChanges().subscribe(_data =>{
      this.llave = _data;
      console.log(this.llave);


    });



  }

  verinfoempleado2(Empleados){
            this.navCtrl.push(EmpleadoinfoPage, { Empleados : Empleados });

  }

  anadirempleado(Empleados){
    
    this.navCtrl.push(AñadirperfilPage, { Empleados : Empleados });
    //console.log(this.Empleados);

  }

  borrarempleado(i){
  
  
      this.afDB.list("Empleados").remove(this.llave[i].key);
      
     alert("Empleado borrado");
   
}

  salir3(){
    this.navCtrl.push(LoginPage);
    location.reload();/*REFRESCA LA PAGINA*/
}


/*
   borrarusuario(){
		this.navCtrl.push(BorrarperfilPage);
	}

	 meterusuario(){
		this.navCtrl.push(AñadirperfilPage);
	}

  */

}
