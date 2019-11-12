import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupFairComponent } from './startup-fair.component';

const routes: Routes = [{ path: '', component: StartupFairComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupFairRoutingModule { }
