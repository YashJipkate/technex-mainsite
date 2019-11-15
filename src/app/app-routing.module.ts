import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'events',
    component: EventsComponent ,
    data: {title: 'Technex | Events'} 
  },
  {
    path: 'startupFair',
    loadChildren: () => import('./startup-fair/startup-fair.module').then(m => m.StartupFairModule),
    data: {title: 'Technex | Startup Fair'} 
  },
  { 
    path: 'thinkTalks',
    loadChildren: () => import('./think-talks/think-talks.module').then(m => m.ThinkTalksModule),
    data: {title: 'Technex | Think Talks'} 
  },
  {
    path: 'corporateConclave',
    loadChildren: () => import('./corporate-conclave/corporate-conclave.module').then(m => m.CorporateConclaveModule),
    data: {title: 'Technex | Corporate Conclave'} 
  },
  {
    path: 'initiatives',
    loadChildren: () => import('./initiatives/initiatives.module').then(m => m.InitiativesModule), 
    data: {title: 'Technex | Initiatives'} 
  },
  {
    path: 'kaleidoscope',
    loadChildren: () => import('./kaleidoscope/kaleidoscope.module').then(m => m.KaleidoscopeModule),
    data: {title: 'Technex | Kaleidoscope'} 
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule),
    data: {title: 'Technex | Events'} 
  },
  { path: 'exhibitions', 
    loadChildren: () => import('./exhibitions/exhibitions.module').then(m => m.ExhibitionsModule), 
    data: {title: 'Technex | Exhibitions'} 
  },
  { path: 'workshops', 
    loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsModule), 
    data: {title: 'Technex | Workshops'} 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
