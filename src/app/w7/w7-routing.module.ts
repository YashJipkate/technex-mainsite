import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W7Component } from './w7.component';

const routes: Routes = [{ path: '', component: W7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W7RoutingModule { }
