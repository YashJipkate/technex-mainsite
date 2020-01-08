import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W14Component } from './w14.component';

const routes: Routes = [{ path: '', component: W14Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W14RoutingModule { }
