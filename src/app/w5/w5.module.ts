import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W5RoutingModule } from './w5-routing.module';
import { W5Component } from './w5.component';


@NgModule({
  declarations: [W5Component],
  imports: [
    CommonModule,
    W5RoutingModule
  ]
})
export class W5Module { }
