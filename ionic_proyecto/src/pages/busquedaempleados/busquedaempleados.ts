import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosProvider } from '../../providers/datos/datos';


@Component({
  templateUrl: 'busquedaempleados.html'
})
export class BusquedaempleadosPage {
  items: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serDatos: DatosProvider) {
    
  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Mikel', 'Gorka', 'Iñaki', 'Jon'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
}