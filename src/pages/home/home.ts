import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  users: FirebaseListObservable<any>;	

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
    this.users = angFire.database.list('/users');
//    this.agenda = users.agenda
  }


  addUser(): void{

  	let prompt = this.alertCtrl.create({
  		title: 'User Info',
  		message: 'Username & Password',
  		inputs: [

  			{
  				name: 'userName',
  				placeholder:"User Name"
  			},  			
  			{
  				name: 'dob',
  				placeholder: "DD/MM/YYYY"
  			},
  			{
  				name: 'evento',
  				placeholder:"Surgical Event"
  			},  			
  			{
  				name: 'psw',
  				placeholder: "Password",
  				type: 'password'
  			},
  			{
  				name: 'origen',
  				placeholder: "City of Origin",
  			}

  		],
  		buttons: [
  			{
  				text:"Cancel",
  				handler: data => {
  					console.log("Cancel clicked");
  				}
  			},

  			{
  				text:"Save",
  				handler: data =>{
  					this.users.push({
              datos:{
    						evento: data.evento,
    						nombre: data.userName,
    						psw: data.psw,
    						dob: data.dob,
    						origen: data.origen
                },
              agenda:{
                caso : false,
                evento : false,
                histMed : false,
                postop: false,
                preparacion : false,
                valoracion : false
              }
              })
  				
  				}
  			}
  		]
  	});
  	prompt.present();
  }

   logIn(): void{

    let prompt = this.alertCtrl.create({
      title: 'User Info',
      message: 'Username & Password',
      inputs: [

        {
          name: 'userName',
          placeholder:"Username"
        },        
        {
          name: 'psw',
          placeholder: "Password",
          type: "Password"
        }

      ],
      buttons: [
        {
          text:"Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text:"Log In",
          handler: data => {
            console.log("Log In");
          }
        }
      ]
    });
    prompt.present();
  }
}