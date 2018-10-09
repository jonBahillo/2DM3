import { Injectable } from '@angular/core';

/*
  Generated class for the DatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatosProvider {

	usuarios= [];
   arreglo:any []=[];

  constructor() {
    console.log('Hello DatosProvider Provider');

    this.usuarios = [
    {nombre:'Mikel'},
    {nombre:'Gorka'},
    {nombre:'Jon'},
    {nombre:'Iñaki'}
    ];
  }

}
