import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { W91Component } from './w91.component';

const routes: Routes = [{ path: '', component: W91Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class W91RoutingModule { }
