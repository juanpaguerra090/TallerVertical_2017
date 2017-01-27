import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/*
  Generated class for the Accomodation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-accomodation',
  templateUrl: 'accomodation.html'
})
export class AccomodationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccomodationPage');
  }
  // Hoteles Jalisco
  showAlertAndares() {
    let alert = this.alertCtrl.create({
      title: 'Hyatt Regency Andares',
      message: 'This first class hotel is only a mile away from our hospital. At Hyatt Regency Andares Guadalajara, enjoy an upscale location in one of Mexico’s most celebrated cities. Ideal for both business and leisure travelers, this hotel features a stunning design, contemporary guestrooms, sophisticated meeting spaces, and vibrant dining experiences in the bustling Zapopan district',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertGarden() {
    let alert = this.alertCtrl.create({
      title: 'Wyndham Garden Guadalajara Acueducto',
      message: '62.73 usd to $72.11 usd at 0.7 miles (1.1 km) from the hospital. Release your tension with a smile at our Wyndham Garden Acueducto. Located near delightful shopping, historic grandeur, our hotel is well-situated for relaxation. With Miguel Hidalgo y Costilla International Airport (GDL) less than an hour’s drive from our front doors, you can arrive in ease.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertReal() {
    let alert = this.alertCtrl.create({
      title: 'Hotel Real Zapopan',
      message: 'Around $34.06 usd. 9 minutes to the hospital by car. The best hotel in the historic center of the city of Zapopan, 10 minutes from the Telmex Auditorium one block from the Basilica of Zapopan and close to the best shopping centers in the metropolitan area.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertPosada() {
    let alert = this.alertCtrl.create({
      title: 'Hotel Posada Santa Fe',
      message: 'From $21.51 usd at 8 minutes away by car from the hospital. Enjoy your stay in Hotel Posada Santa Fe. We offer express and extended stay rates. Hotel Posada Santa Fe offers you comfort and tranquility. Ideal for business.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertIteso() {
    let alert = this.alertCtrl.create({
      title: 'Holiday Inn Express Iteso',
      message: 'From $70 usd at 20 minutes away by car from the hospital. Conveniently located in the industrial zone and near the Industrial and Technology Park II, the Holiday Inn Express® Guadalajara Iteso Hotel is the best option for the business traveler.',
      buttons: ['OK']
    });
    alert.present();
  }

  //Hoteles Colima
    showAlertWestern() {
    let alert = this.alertCtrl.create({
      title: 'Best Western Ceballos',
      message: 'From $61.10 usd at 12 minutes away by car from the hospital.',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertIsabel() {
    let alert = this.alertCtrl.create({
      title: 'Hotel Maria Isabel',
      message: 'From $58.36 usd at 7 minutes away by car from the hospital. Tradition, service and the best facilities make Hotel María Isabel the favorite choice among hotels in ColimaFrom $47.53 usd at 7 minutes away by car from the hospital',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertFiesta() {
    let alert = this.alertCtrl.create({
      title: 'Fiesta Inn Tepic',
      message: 'From $56 usd at 6 minutes away by car from the hospital. Located in the Plaza Forum, at the entrance to the city and 10 minutes from the center, from where you can access attractions including the Cathedral, the Cruz de Zacate Temple and former Convent, the Regional Anthropology Museum, Cerro de la Cruz and the Bay of San Blas',
      buttons: ['OK']
    });
        alert.present();
	}

  showAlertNeKie() {
    let alert = this.alertCtrl.create({
      title: 'Hotel NE Kie Tepic',
      message: 'From $47.53 usd at 7 minutes away by car from the hospital',
      buttons: ['OK']
    });
        alert.present();
  }
}
