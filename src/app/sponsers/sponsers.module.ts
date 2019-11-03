import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsersRoutingModule } from './sponsers-routing.module';
import { SponsersComponent } from './sponsers.component';


@NgModule({
  declarations: [SponsersComponent],
  imports: [
    CommonModule,
    SponsersRoutingModule
  ]
})
export class SponsersModule { }
