import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeampageComponent } from './teampage.component';

const routes: Routes = [{ path: '', component: TeampageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeampageRoutingModule { }
