import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W3RoutingModule } from './w3-routing.module';
import { W3Component } from './w3.component';


@NgModule({
  declarations: [W3Component],
  imports: [
    CommonModule,
    W3RoutingModule
  ]
})
export class W3Module { }
