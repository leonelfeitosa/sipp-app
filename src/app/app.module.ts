import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonMaskModule } from '@pluritech/ion-mask';
import { HttpClientModule } from '@angular/common/http'
import { EvolucaoPage } from '../pages/evolucao/evolucao';
import { HistoricoPage } from '../pages/historico/historico';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: 
  [
    TabsPage,
    MyApp,
    LoginPage,
    HistoricoPage,
    EvolucaoPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonMaskModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TabsPage,
    MyApp,
    HistoricoPage,
    EvolucaoPage,
    LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
