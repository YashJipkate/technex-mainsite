import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W10RoutingModule } from './w10-routing.module';
import { W10Component } from './w10.component';


@NgModule({
  declarations: [W10Component],
  imports: [
    CommonModule,
    W10RoutingModule
  ]
})
export class W10Module { }
