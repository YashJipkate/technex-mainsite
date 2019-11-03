import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaleidoscopeComponent } from './kaleidoscope.component';

const routes: Routes = [{ path: '', component: KaleidoscopeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaleidoscopeRoutingModule { }
