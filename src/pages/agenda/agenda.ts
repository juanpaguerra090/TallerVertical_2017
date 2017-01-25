import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApplicationPage } from  '../application/application';

import { RevisionPage } from  '../revision/revision';

import { ValidationPage } from  '../validation/validation';

import { PreparationPage } from  '../preparation/preparation';

import { OperationPage } from  '../operation/operation';

import { PostopPage } from  '../postop/postop';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  nextPageApp(){
  		this.navCtrl.push(ApplicationPage);
  	}
  	nextPageRev(){
  		this.navCtrl.push(RevisionPage);
  	}
  	nextPageVal(){
  		this.navCtrl.push(ValidationPage);
  	}
  	nextPagePre(){
  		this.navCtrl.push(PreparationPage);
  	}
  	nextPageOp(){
  		this.navCtrl.push(OperationPage);
  	}
  	nextPagePos(){
  		this.navCtrl.push(PostopPage);
  	}



}
