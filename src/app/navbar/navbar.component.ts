import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: 'startupFair',
    title: 'STARTUP FAIR',
    class: ''
  },
  {
    path: '#',
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
  {
    path: '#',
    title: 'EVENTS',
    class: ''
  },
];

export const ROUTS: RouteInfo[] = [
  {
    path: '#',
    title: 'WORKSHOPS',
    class: ''
  },
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
];

export const logo: RouteInfo[] = [
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
  menuItems: any[];
  menuItemms: any[];
  menuItemmms: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemms = ROUTS.filter(menuItemm => menuItemm);
    this.menuItemmms = logo.filter(menuItemmm => menuItemmm);

  }  
}
