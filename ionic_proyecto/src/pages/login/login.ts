import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
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

//	usuarios:any;
//  correo:string = "";
//  contrasena:string= "";
  titulo="Autentificate";
  adm=0;
  DNI=0;
  ocultar = false;
  boton = true;
  dni = "";
  contrasena="";
  i = 1;
  items:any []=[];
  Nombres: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {


this.Nombres = afDB.list('/Empleados').valueChanges();


  }



acceder(){
  localStorage.setItem("adm", 0);
  let encontrado:boolean =false;

const personRef2: firebase.database.Reference = firebase.database().ref('/Empleados/');

personRef2.on('value', Name2 => {
this.Nombres = Name2.val();

  for (var i = 1; i < Name2.val().length; ++i) {
  const personRef: firebase.database.Reference = firebase.database().ref('/Empleados/'+i);
  if (personRef != null){
    personRef.on('value', Name => {
      this.Nombres = Name.val();
      if(Name.val().DNI == this.dni && Name.val().Contraseña == this.contrasena){
        this.titulo="Usuario autentificado";
        this.ocultar=true;
        this.boton=false;
       localStorage.setItem("DNI", Name.val().DNI);
          localStorage.getItem("DNI");
        if (Name.val().Puesto == "Administrador") {
        localStorage.setItem("adm", 1);
}
        //el encontrado no es necesario
        encontrado=true;
     
      }
      });
    }
  };
});
console.log(encontrado);
if (!encontrado){
  console.log('el correo introducido no es de ningun usuario registrado');
     this.dni = "";
     this.contrasena= "";
     this.titulo="Autentificate";
   }

}

ver_productos(){
  console.log('Accediendo');
  if (localStorage.getItem("adm")==1){
    this.navCtrl.push(HomePage);
  }else{
      this.navCtrl.push(Home2Page);
  }

  }

}
