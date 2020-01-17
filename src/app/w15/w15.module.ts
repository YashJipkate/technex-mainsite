import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W15RoutingModule } from './w15-routing.module';
import { W15Component } from './w15.component';


@NgModule({
  declarations: [W15Component],
  imports: [
    CommonModule,
    W15RoutingModule
  ]
})
export class W15Module { }
