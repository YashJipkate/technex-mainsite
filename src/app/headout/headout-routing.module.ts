import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadoutComponent } from './headout.component';

const routes: Routes = [{ path: '', component: HeadoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadoutRoutingModule { }
