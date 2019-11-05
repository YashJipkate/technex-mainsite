import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'startupFair',
    loadChildren: () => import('./startup-fair/startup-fair.module').then(m => m.StartupFairModule)
  },
  { 
    path: 'thinkTalks',
    loadChildren: () => import('./think-talks/think-talks.module').then(m => m.ThinkTalksModule) 
  },
  {
    path: 'corporateConclave',
    loadChildren: () => import('./corporate-conclave/corporate-conclave.module').then(m => m.CorporateConclaveModule)
  },
  {
    path: 'initiatives',
    loadChildren: () => import('./initiatives/initiatives.module').then(m => m.InitiativesModule) 
  },
  {
    path: 'kaleidoscope',
    loadChildren: () => import('./kaleidoscope/kaleidoscope.module').then(m => m.KaleidoscopeModule)
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
