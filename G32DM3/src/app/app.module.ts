import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SalidaPage } from '../pages/salida/salida';
import { LoginPage } from '../pages/login/login';
import { UltimaPage } from '../pages/ultima/ultima';

import { IonicStorageModule } from '@ionic/storage';
import { DatosProvider } from '../providers/datos/datos';

//import { AngularFireModule } from 'angularfire2';
/*import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: "AIzaSyAvYzM1bqFjoVi-VGMHeDbN0XwFsYDtLQ0",
  authDomain: "demo104-60efc.firebaseapp.com",
  databaseURL: "https://demo104-60efc.firebaseio.com",
  projectId: "demo104-60efc",
  storageBucket: "demo104-60efc.appspot.com",
  messagingSenderId: "903778168776"
};*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalidaPage,
    LoginPage,
    UltimaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalidaPage,
    LoginPage,
    UltimaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosProvider
  ]
})
export class AppModule {}
