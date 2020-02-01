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
  { path: 'teampage', loadChildren: () => import('./teampage/teampage.module').then(m => m.TeampageModule) },
  { path: 'gaming', loadChildren: () => import('./gaming/gaming.module').then(m => m.GamingModule), data: {title: 'Gaming | Technex'} },
  { path: 'chat-bot', loadChildren: () => import('./w1/w1.module').then(m => m.W1Module), data: {title: 'Workshops | Technex'} },
  { path: 'java', loadChildren: () => import('./w2/w2.module').then(m => m.W2Module), data: {title: 'Workshops | Technex'} },
  { path: 'digitalmarketing', loadChildren: () => import('./w3/w3.module').then(m => m.W3Module), data: {title: 'Workshops | Technex'} },
  { path: 'bridge', loadChildren: () => import('./w4/w4.module').then(m => m.W4Module), data: {title: 'Workshops | Technex'} },
  { path: 'googlehome', loadChildren: () => import('./w5/w5.module').then(m => m.W5Module), data: {title: 'Workshops | Technex'} },
  { path: 'drone', loadChildren: () => import('./w6/w6.module').then(m => m.W6Module), data: {title: 'Workshops | Technex'} },
  { path: 'ardubotics', loadChildren: () => import('./w7/w7.module').then(m => m.W7Module), data: {title: 'Workshops | Technex'} },
  { path: 'automobile', loadChildren: () => import('./w8/w8.module').then(m => m.W8Module), data: {title: 'Workshops | Technex'} },
  { path: 'hacknex', loadChildren: () => import('./w9/w9.module').then(m => m.W9Module), data: {title: 'Workshops | Technex'} },
  { path: 'ai', loadChildren: () => import('./w10/w10.module').then(m => m.W10Module), data: {title: 'Workshops | Technex'} },
  { path: 'autocad', loadChildren: () => import('./w11/w11.module').then(m => m.W11Module), data: {title: 'Workshops | Technex'} },
  { path: 'iot', loadChildren: () => import('./w12/w12.module').then(m => m.W12Module), data: {title: 'Workshops | Technex'} },
  { path: 'data', loadChildren: () => import('./w13/w13.module').then(m => m.W13Module), data: {title: 'Workshops | Technex'} },
  { path: 'webdev', loadChildren: () => import('./w14/w14.module').then(m => m.W14Module), data: {title: 'Workshops | Technex'} },
  { path: 'raspberry', loadChildren: () => import('./w15/w15.module').then(m => m.W15Module), data: {title: 'Workshops | Technex'} },
  { path: 'plc', loadChildren: () => import('./w16/w16.module').then(m => m.W16Module), data: {title: 'Workshops | Technex'} },
  { path: 'appdev', loadChildren: () => import('./w17/w17.module').then(m => m.W17Module), data: {title: 'Workshops | Technex'} },
  { path: 'headout', loadChildren: () => import('./headout/headout.module').then(m => m.HeadoutModule) },
  { path: 'hacknex2', loadChildren: () => import('./w91/w91.module').then(m => m.W91Module), data: {title: 'Workshops | Technex'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
