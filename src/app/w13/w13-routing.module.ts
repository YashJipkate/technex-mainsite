import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W13Component } from './w13.component';

const routes: Routes = [{ path: '', component: W13Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W13RoutingModule { }
