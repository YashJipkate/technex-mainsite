import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W16RoutingModule } from './w16-routing.module';
import { W16Component } from './w16.component';


@NgModule({
  declarations: [W16Component],
  imports: [
    CommonModule,
    W16RoutingModule
  ]
})
export class W16Module { }
