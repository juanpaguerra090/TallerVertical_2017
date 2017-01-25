import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Navigation
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireModule} from 'angularfire2';
//Tips
import { AccomodationPage } from '../pages/accomodation/accomodation';
import { MigrationPage } from '../pages/migration/migration';
import { FlightPage } from  '../pages/flight/flight';
import { TransportationPage } from  '../pages/transportation/transportation';
import { CityPage } from  '../pages/city/city';
import { FollowupPage } from  '../pages/followup/followup';
import { ProfilePage } from '../pages/profile/profile';
import { AgendaPage } from '../pages/agenda/agenda';
//Agenda
import { ApplicationPage } from '../pages/application/application';
import { RevisionPage } from '../pages/revision/revision';
import { ValidationPage } from  '../pages/validation/validation';
import { PreparationPage } from  '../pages/preparation/preparation';
import { OperationPage } from  '../pages/operation/operation';
import { PostopPage } from  '../pages/postop/postop';





export const firebaseConfig = {
   apiKey: "AIzaSyA2L_sIFFq4Z0hxr5Qy6ZDkS1e44ktboR0",
    authDomain: "uploadtest-44f1e.firebaseapp.com",
    databaseURL: "https://uploadtest-44f1e.firebaseio.com",
    storageBucket: "uploadtest-44f1e.appspot.com",
    messagingSenderId: "263437282038"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccomodationPage,
    MigrationPage,
    FlightPage,
    TransportationPage,
    CityPage,
    FollowupPage,
    ProfilePage, 
    AgendaPage,
    ApplicationPage,
    RevisionPage,
    ValidationPage,
    PreparationPage,
    OperationPage,
    PostopPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccomodationPage,
    MigrationPage,
    FlightPage,
    TransportationPage,
    CityPage,
    FollowupPage,
    ProfilePage,
    AgendaPage,
    ApplicationPage,
    RevisionPage,
    ValidationPage,
    PreparationPage,
    OperationPage,
    PostopPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
