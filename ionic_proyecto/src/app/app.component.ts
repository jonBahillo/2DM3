import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';

import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = Home2Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
