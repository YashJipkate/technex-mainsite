import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { Events2Component } from './events2/events2.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'events',
    component: Events2Component
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
