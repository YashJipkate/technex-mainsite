import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const LEFTROUTES: RouteInfo[] = [
  {
    path: 'startupFair',
    title: 'STARTUP FAIR',
    class: ''
  },
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
  {
    path: 'events',
    title: 'EVENTS',
    class: ''
  },
];

export const RIGHTROUTES: RouteInfo[] = [
  {
    path: 'workshops',
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
  constructor() { }
 
  ngOnInit() {
    this.leftmenuItems = LEFTROUTES.filter(menuItem => menuItem);
    this.rightmenuItems = RIGHTROUTES.filter(menuItemm => menuItemm);
    this.logomenuItems = LOGOROUTES.filter(menuItemmm => menuItemmm);
  }  
}
