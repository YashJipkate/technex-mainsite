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
    data: {title: 'Events | Technex'} 
  },
  {
    path: 'startupFair',
    loadChildren: () => import('./startup-fair/startup-fair.module').then(m => m.StartupFairModule),
    data: {title: 'Startup Fair | Technex'} 
  },
  { 
    path: 'thinkTalks',
    loadChildren: () => import('./think-talks/think-talks.module').then(m => m.ThinkTalksModule),
    data: {title: 'Think Talks | Technex'} 
  },
  {
    path: 'corporateConclave',
    loadChildren: () => import('./corporate-conclave/corporate-conclave.module').then(m => m.CorporateConclaveModule),
    data: {title: 'Corporate Conclave | Technex'} 
  },
  {
    path: 'initiatives',
    loadChildren: () => import('./initiatives/initiatives.module').then(m => m.InitiativesModule), 
    data: {title: 'Initiatives | Technex'} 
  },
  {
    path: 'kaleidoscope',
    loadChildren: () => import('./kaleidoscope/kaleidoscope.module').then(m => m.KaleidoscopeModule),
    data: {title: 'Kaleidoscope | Technex'} 
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule),
    data: {title: 'Sponsors | Technex'} 
  },
  { path: 'exhibitions', 
    loadChildren: () => import('./exhibitions/exhibitions.module').then(m => m.ExhibitionsModule), 
    data: {title: 'Exhibitions | Technex'} 
  },
  { path: 'workshops', 
    loadChildren: () => import('./workshops/workshops.module').then(m => m.WorkshopsModule), 
    data: {title: 'Workshops | Technex'} 
  },
  { path: 'teampage', loadChildren: () => import('./teampage/teampage.module').then(m => m.TeampageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
