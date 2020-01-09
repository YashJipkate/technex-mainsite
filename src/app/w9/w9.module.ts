import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W9RoutingModule } from './w9-routing.module';
import { W9Component } from './w9.component';


@NgModule({
  declarations: [W9Component],
  imports: [
    CommonModule,
    W9RoutingModule
  ]
})
export class W9Module { }
