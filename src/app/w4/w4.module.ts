import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W4RoutingModule } from './w4-routing.module';
import { W4Component } from './w4.component';


@NgModule({
  declarations: [W4Component],
  imports: [
    CommonModule,
    W4RoutingModule
  ]
})
export class W4Module { }
