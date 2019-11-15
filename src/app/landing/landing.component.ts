import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'sponsors',
<<<<<<< HEAD
    title: 'SPONSORS',
=======
    title: 'Sponsors',
>>>>>>> c6af1981c0c01a9a63ce79430fdedb3c4efdf2aa
    class: ''
  },
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  menuItems: any[];

  constructor() { }

    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }  

}
