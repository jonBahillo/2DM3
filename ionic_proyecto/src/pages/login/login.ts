import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { DatosProvider } from '../../providers/datos/datos';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


//  usuarios:any;
//  correo:string = "";
//  password:string= "";
  titulo="Autentificate";
  adm=0;
  ocultar = false;
  boton = true;
  dni = "";
  password="";
  i = 1;
  id = "";
  items:any []=[];
  Nombres: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datos: DatosProvider, afDB: AngularFireDatabase) {


this.Nombres = afDB.list('Empleados').valueChanges();


  }



acceder(){

  let encontrado:boolean =false;
  var password2 = this.password;
  var dni2 = this.dni;



const personRef2: firebase.database.Reference = firebase.database().ref('/Empleados/');



personRef2.on('value', Name2 => {
this.Nombres = Name2.val();

console.log(this.Nombres);


//  console.log(Object.keys(this.Nombres).length);

for (var i = 0; i < Object.keys(this.Nombres).length ; ++i) {

 this.id = Object.keys(this.Nombres)[i];

console.log(this.Nombres[this.id].DNI);


if(this.Nombres[this.id].DNI == dni2 && this.Nombres[this.id].password == password2){
  //this.titulo="Usuario autentificado";
  //this.ocultar=true;
  //this.boton=false;
  //console.log(this.Nombre[i].DNI);
  this.datos.arreglo=[];
  this.datos.arreglo.push(this.Nombres[this.id]);

  if (this.Nombres[this.id].Puesto == "Administrador") {
//   localStorage.setItem("adm", '1');
this.navCtrl.push(HomePage);
}else{
//  localStorage.setItem("adm", '0');
this.navCtrl.push(Home2Page);

}
}


  //const personRef: firebase.database.Reference = firebase.database().ref('/Empleados/'+i);
  /*if (personRef != null){
    personRef.on('value', Name => {
      this.Nombres = Name.val()

      if(Name.val().DNI == dni2 && Name.val().password == password2){
        //this.titulo="Usuario autentificado";
        //this.ocultar=true;
        //this.boton=false;
        if (Name.val().Puesto == "Administrador") {
    //   localStorage.setItem("adm", '1');
    this.navCtrl.push(HomePage);
}else{
//  localStorage.setItem("adm", '0');
 this.navCtrl.push(Home2Page);
}

        //el encontrado no es necesario
        encontrado=true;
      }

      });
  //  }*/
  };
});


if (!encontrado){
  //console.log('el dni o la contraseña introducidas no es de ningun de los usuarios registrado');

     this.dni = "";
     this.password= "";
     this.titulo="Autentificate";
   }

}

ver_productos(){
  /*console.log('Accediendo');
  if (localStorage.getItem("adm")=='1'){
    this.navCtrl.push(HomePage);
  }else{
      this.navCtrl.push(Home2Page);
  }*/

  }

}
