import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W5Component } from './w5.component';

const routes: Routes = [{ path: '', component: W5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W5RoutingModule { }
