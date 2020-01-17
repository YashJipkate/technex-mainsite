import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W1Component } from './w1.component';

const routes: Routes = [{ path: '', component: W1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W1RoutingModule { }
