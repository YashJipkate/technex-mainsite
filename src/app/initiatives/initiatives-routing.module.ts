import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiativesComponent } from './initiatives.component';

const routes: Routes = [{ path: '', component: InitiativesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiativesRoutingModule { }
