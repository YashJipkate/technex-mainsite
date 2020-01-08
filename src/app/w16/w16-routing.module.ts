import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W16Component } from './w16.component';

const routes: Routes = [{ path: '', component: W16Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W16RoutingModule { }
