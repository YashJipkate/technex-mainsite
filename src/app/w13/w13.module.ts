import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W13RoutingModule } from './w13-routing.module';
import { W13Component } from './w13.component';


@NgModule({
  declarations: [W13Component],
  imports: [
    CommonModule,
    W13RoutingModule
  ]
})
export class W13Module { }
