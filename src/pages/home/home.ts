import { Component, ElementRef, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2'
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  root: any;
  users: FirebaseListObservable<any>;	

 constructor(public navCtrl: NavController, public alertCtrl: AlertController, public angFire: AngularFire,  public element : ElementRef) {
    this.users = angFire.database.list('/users');

    if(!this.isAlreadyLoggedIn()){
      console.log("Not logged yet, redirect to login page");
                  this.navCtrl.setRoot(TabsPage,{})

        //this.navCtrl.push(LoginPage);
    }

  }

  isAlreadyLoggedIn(){
    let user = window.localStorage.getItem('user');
    return user !== null && user !== undefined;
  }

  ngOnInit(){
    this.root = this.element.nativeElement;
    
    var loginBtn = this.root.querySelector('#loginBtn');
    loginBtn.addEventListener('click',this.onClick.bind(this));
  }

  onClick(e){
    console.log("Login in");
    let self = this;
    let email:string = this.root.querySelector('#email').value;
    let password:string = this.root.querySelector('#password').value;
    this.angFire.auth.login({
      email: email,
      password:password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    }).then(function(response){
      let user = {
        email:response.auth.email,
        picture:response.auth.photoURL
      };
      console.log(email);
      self.navCtrl.pop();
    }).catch(function(error){
      console.log(error);
    });
    
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
              this.navCtrl.setRoot(TabsPage,{})
  				
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
            this.navCtrl.setRoot(TabsPage,{})
          }
        }
      ]
    });
    prompt.present();
  }
}