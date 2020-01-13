import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThinkTalksComponent } from './think-talks.component';

const routes: Routes = [{ path: '', component: ThinkTalksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkTalksRoutingModule { }
