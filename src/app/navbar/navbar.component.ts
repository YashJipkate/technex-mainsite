import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const LEFTROUTES: RouteInfo[] = [
  {
    path: 'exhibitions',
    title: 'EXHIBITIONS',
    class: ''
  },
  {
    path: 'kaleidoscope',
    title: 'KALEIDOSCOPE',
    class: ''
  },
  {
    path: 'thinkTalks',
    title: 'THINK TALKS',
    class: ''
  },
];

export const RIGHTROUTES: RouteInfo[] = [
  {
    path: 'initiatives',
    title: 'INITIATIVES',
    class: ''
  }, 
  {
    path: 'corporateConclave',
    title: 'CORPORATE CONCLAVE',
    class: ''
  },
  {
    path: 'gaming',
    title: 'GAMING DUNGEON',
    class: ''
  },
];

export const LOGOROUTES: RouteInfo[] = [
  {
    path: '/',
    title: '',
    class: ''
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  leftmenuItems: any[];
  rightmenuItems: any[];
  logomenuItems: any[];
  isLoggedIn: string;
  isLoggedInBool: boolean;
  constructor(private cookieService: CookieService) {
    this.isLoggedIn = this.cookieService.get('logged');
    if (this.isLoggedIn === 'true') {
      this.isLoggedInBool = true;
    } else {
      this.isLoggedInBool = false;
    }
  }
  ngOnInit() {
    this.leftmenuItems = LEFTROUTES.filter(menuItem => menuItem);
    this.rightmenuItems = RIGHTROUTES.filter(menuItemm => menuItemm);
    this.logomenuItems = LOGOROUTES.filter(menuItemmm => menuItemmm);
  }
}
