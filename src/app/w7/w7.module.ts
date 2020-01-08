import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W7RoutingModule } from './w7-routing.module';
import { W7Component } from './w7.component';


@NgModule({
  declarations: [W7Component],
  imports: [
    CommonModule,
    W7RoutingModule
  ]
})
export class W7Module { }
