import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormProdutoPage } from './form-produto';

@NgModule({
  declarations: [
    FormProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormProdutoPage),
  ],
})
export class FormProdutoPageModule {}
