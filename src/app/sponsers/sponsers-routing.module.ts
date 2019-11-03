import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SponsersComponent } from './sponsers.component';

const routes: Routes = [{ path: '', component: SponsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsersRoutingModule { }
