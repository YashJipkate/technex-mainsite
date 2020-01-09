import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W10Component } from './w10.component';

const routes: Routes = [{ path: '', component: W10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W10RoutingModule { }
