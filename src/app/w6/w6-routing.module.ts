import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W6Component } from './w6.component';

const routes: Routes = [{ path: '', component: W6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W6RoutingModule { }
