import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
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
  ocultar = false;
  boton = true;
  items:any []=[];
  Nombres: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase) {

    this.Nombres = afDB.list('Nombres').valueChanges();


/*	this.usuarios = [
    {nombre: 'Miren', apellido: 'Gurrutxurtu', correo: 'a', contrasena: 'a', foto: '../../assets/usuarios/miren.png'},
    {nombre: 'Pedro', apellido: 'Garcia', correo: 'b', contrasena: 'b', foto: '../../assets/usuarios/pedro.png'}
    ]

localStorage.setItem("usuarios", JSON.stringify( this.usuarios ));
    console.log(this.usuarios);*/

  }



  acceder(){
  /*  console.log(this.Nombres);
  let encontrado:boolean =false;
  console.log(this.Nombre);
 console.log(this.contrasena);
*/


/*
 for (var i = 0; i < this.usuarios.length; ++i) {
    if(this.correo == this.usuarios[i].correo && this.contrasena == this.usuarios[i].contrasena ) {
      console.log('usuario en registro ' + this.usuarios[i].correo);
        this.titulo="Usuario autentificado";
        this.usuarios.push(this.usuarios[i]);
        //this.guardar_storage();
        this.ocultar=true;
        this.boton=false;
        //el encontrado no es necesario
        encontrado=true;
        break;
    }
  }

 if (!encontrado){
      console.log('el correo introducido no es de ningun usuario registrado');
      this.correo = "";
      this.contrasena= "";
      this.titulo="Autentificate";
    }*/

}

ver_productos(){
  console.log('Accediendo');
  this.navCtrl.push(HomePage);

  }

}
