import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W12Component } from './w12.component';

const routes: Routes = [{ path: '', component: W12Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W12RoutingModule { }
