import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W8RoutingModule } from './w8-routing.module';
import { W8Component } from './w8.component';


@NgModule({
  declarations: [W8Component],
  imports: [
    CommonModule,
    W8RoutingModule
  ]
})
export class W8Module { }
