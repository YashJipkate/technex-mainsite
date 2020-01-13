import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Router, NavigationEnd, ActivatedRoute, NavigationStart,
  NavigationCancel
} from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Location } from '@angular/common';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  title = 'technex-mainsite';

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.loading = true;
    }
    private location: Location

  ngOnInit() {
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          }
          return appTitle;
        })
      ).subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
      
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
        else if (event instanceof NavigationCancel) {
          this.loading = true;
        }
      });
      
      //console.log(this.activatedRoute['_futureSnapshot']['_routerState']);
      //console.log(this.activatedRoute);
      //console.log(window.location.pathname);
      //console.log(this.router.url);
      //console.log(this.location.path);
      
  }
}
