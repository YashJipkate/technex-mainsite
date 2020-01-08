import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W2RoutingModule } from './w2-routing.module';
import { W2Component } from './w2.component';


@NgModule({
  declarations: [W2Component],
  imports: [
    CommonModule,
    W2RoutingModule
  ]
})
export class W2Module { }
