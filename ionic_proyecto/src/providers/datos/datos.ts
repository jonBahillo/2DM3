import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

	usuarios= [];
   arreglo:any []=[];

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello DatosProvider Provider');

    this.usuarios = [
    {nombre:'Mikel'},
    {nombre:'Gorka'},
    {nombre:'Jon'},
    {nombre:'Iñaki'}
    ];



}

}
