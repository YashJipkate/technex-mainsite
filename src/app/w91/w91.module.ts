import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W91RoutingModule } from './w91-routing.module';
import { W91Component } from './w91.component';


@NgModule({
  declarations: [W91Component],
  imports: [
    CommonModule,
    W91RoutingModule
  ]
})
export class W91Module { }
