import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W11Component } from './w11.component';

const routes: Routes = [{ path: '', component: W11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W11RoutingModule { }
