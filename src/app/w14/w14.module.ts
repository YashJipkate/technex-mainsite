import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W14RoutingModule } from './w14-routing.module';
import { W14Component } from './w14.component';


@NgModule({
  declarations: [W14Component],
  imports: [
    CommonModule,
    W14RoutingModule
  ]
})
export class W14Module { }
