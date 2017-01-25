import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ProfilePage } from '../profile/profile';
import { AgendaPage } from '../agenda/agenda';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;
  public tab5Root: any;


  constructor() {
  	this.tab1Root = AgendaPage
  	this.tab2Root = AboutPage
  	this.tab3Root = ContactPage
    this.tab4Root = ProfilePage

  }

  }

