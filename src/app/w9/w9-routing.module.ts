import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W9Component } from './w9.component';

const routes: Routes = [{ path: '', component: W9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W9RoutingModule { }
