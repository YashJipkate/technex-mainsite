import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W8Component } from './w8.component';

const routes: Routes = [{ path: '', component: W8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W8RoutingModule { }
