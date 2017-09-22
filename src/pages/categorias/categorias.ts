import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { FormCategoriaPage } from '../form-categoria/form-categoria';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl : ModalController
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  abreFormCategoria () {

    let modal = this.modalCtrl.create (FormCategoriaPage);

    modal.present ();

  }

}
