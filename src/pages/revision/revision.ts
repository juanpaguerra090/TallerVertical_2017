import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-revision',
  templateUrl: 'revision.html'
})

export class RevisionPage {
  users: FirebaseListObservable<any>;	

  constructor(public navCtrl: NavController, public navParams: NavParams, angFire: AngularFire) {
  	    this.users = angFire.database.list('/users/RCaaNtxzs7QVlwPsASrXFYSelCD2');
  	    //console.log(this.users.datos.nombre)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevisionPage');
  }

}
