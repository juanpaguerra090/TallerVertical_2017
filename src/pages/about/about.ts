import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AccomodationPage } from  '../accomodation/accomodation';

import { MigrationPage } from  '../migration/migration';

import { FlightPage } from  '../flight/flight';

import { TransportationPage } from  '../transportation/transportation';

import { CityPage } from  '../city/city';

import { FollowupPage } from  '../followup/followup';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

    nextPageAc(){
  		this.navCtrl.push(AccomodationPage);
  	}
  	nextPageMig(){
  		this.navCtrl.push(MigrationPage);
  	}
  	nextPageFli(){
  		this.navCtrl.push(FlightPage);
  	}
  	nextPageTra(){
  		this.navCtrl.push(TransportationPage);
  	}
  	nextPageCit(){
  		this.navCtrl.push(CityPage);
  	}
  	nextPageFol(){
  		this.navCtrl.push(FollowupPage);
  	}

}