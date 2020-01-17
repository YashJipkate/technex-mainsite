import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W3Component } from './w3.component';

const routes: Routes = [{ path: '', component: W3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W3RoutingModule { }
