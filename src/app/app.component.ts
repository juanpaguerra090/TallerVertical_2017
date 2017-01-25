import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  public rootPage: any = TabsPage;

  constructor(platform: Platform) {

    if (localStorage.getItem("currentUser") === null) {
      console.log("not logged in");
        this.rootPage = HomePage;
    } else {
      console.log("already logged in");
        this.rootPage = TabsPage;
    }


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
