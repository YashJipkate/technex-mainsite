import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W2Component } from './w2.component';

const routes: Routes = [{ path: '', component: W2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W2RoutingModule { }
