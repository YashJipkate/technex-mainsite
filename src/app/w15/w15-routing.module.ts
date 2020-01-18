import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W15Component } from './w15.component';

const routes: Routes = [{ path: '', component: W15Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W15RoutingModule { }
