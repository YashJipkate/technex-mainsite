import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W12RoutingModule } from './w12-routing.module';
import { W12Component } from './w12.component';


@NgModule({
  declarations: [W12Component],
  imports: [
    CommonModule,
    W12RoutingModule
  ]
})
export class W12Module { }
