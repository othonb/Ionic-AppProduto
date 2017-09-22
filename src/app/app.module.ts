import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CategoriasPage } from '../pages/categorias/categorias';
import { FormProdutoPage } from '../pages/form-produto/form-produto';
import { FormCategoriaPage } from '../pages/form-categoria/form-categoria';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProdutosPage,
    CategoriasPage,
    TabsPage,
    FormProdutoPage,
    FormCategoriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProdutosPage,
    CategoriasPage,
    TabsPage,
    FormProdutoPage,
    FormCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
