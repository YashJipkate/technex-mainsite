import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W6RoutingModule } from './w6-routing.module';
import { W6Component } from './w6.component';


@NgModule({
  declarations: [W6Component],
  imports: [
    CommonModule,
    W6RoutingModule
  ]
})
export class W6Module { }
