import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { GestionclientesPage } from '../pages/gestionclientes/gestionclientes';
import { GestionarempleadosPage } from '../pages/gestionarempleados/gestionarempleados';
import { GestionarperfilesPage } from '../pages/gestionarperfiles/gestionarperfiles';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig ={
    apiKey: "AIzaSyDvybBq5y_YJkGXXKH91kZtNZRyjIo1X70",
    authDomain: "dm3-de0f2.firebaseapp.com",
    databaseURL: "https://dm3-de0f2.firebaseio.com",
    projectId: "dm3-de0f2",
    storageBucket: "dm3-de0f2.appspot.com",
    messagingSenderId: "167059207091"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Home2Page,
    LoginPage,
    RegistroPage,
    GestionclientesPage,
    GestionarempleadosPage,
    GestionarperfilesPage,
    GestionarproyectosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Home2Page,
    LoginPage,
    RegistroPage,
    GestionclientesPage,
    GestionarempleadosPage,
    GestionarperfilesPage,
    GestionarproyectosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
