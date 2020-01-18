import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W4Component } from './w4.component';

const routes: Routes = [{ path: '', component: W4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W4RoutingModule { }
