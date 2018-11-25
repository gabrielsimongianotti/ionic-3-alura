import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { CarrosServiceProvider } from '../providers/carros-service/carros-service';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';
import 'rxjs/add/operator/finally';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/mergeMap';
import  'rxjs/add/operator/catch';

import  'rxjs/add/observable/fromPromise';
import  'rxjs/add/observable/of';

import  { IonicStorageModule } from '@ionic/storage';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//faz requisição http
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'meuprojeto', //nome da aplicação
      storeName: 'agendamentos',//nome da tabela
      driverOrder:['indexeddb'] //banco que vai trabalhar
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarrosServiceProvider,
    AgendamentosServiceProvider,
    AgendamentoDaoProvider
  ]
})
export class AppModule {}