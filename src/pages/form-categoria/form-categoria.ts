import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-form-categoria',
  templateUrl: 'form-categoria.html',
})
export class FormCategoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCategoriaPage');
  }

  voltaPagina() {

    this.navCtrl.pop ();

  }

}
