import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'busquedaempleados.html'
})
export class BusquedaempleadosPage {
  items: Array<string>;

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