import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W17RoutingModule } from './w17-routing.module';
import { W17Component } from './w17.component';


@NgModule({
  declarations: [W17Component],
  imports: [
    CommonModule,
    W17RoutingModule
  ]
})
export class W17Module { }
