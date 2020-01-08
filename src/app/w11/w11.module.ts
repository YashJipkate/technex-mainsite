import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W11RoutingModule } from './w11-routing.module';
import { W11Component } from './w11.component';


@NgModule({
  declarations: [W11Component],
  imports: [
    CommonModule,
    W11RoutingModule
  ]
})
export class W11Module { }
