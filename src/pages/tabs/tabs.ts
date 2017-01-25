import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;

  constructor() {
  	this.tab1Root = AboutPage
  	this.tab2Root = AboutPage
  	this.tab3Root = ContactPage
  }

  }

