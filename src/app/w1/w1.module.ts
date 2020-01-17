import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W1RoutingModule } from './w1-routing.module';
import { W1Component } from './w1.component';


@NgModule({
  declarations: [W1Component],
  imports: [
    CommonModule,
    W1RoutingModule
  ]
})
export class W1Module { }
