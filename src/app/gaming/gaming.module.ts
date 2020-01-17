import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamingRoutingModule } from './gaming-routing.module';
import { GamingComponent } from './gaming.component';


@NgModule({
  declarations: [GamingComponent],
  imports: [
    CommonModule,
    GamingRoutingModule
  ]
})
export class GamingModule { }
