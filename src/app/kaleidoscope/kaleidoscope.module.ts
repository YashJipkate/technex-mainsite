import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaleidoscopeRoutingModule } from './kaleidoscope-routing.module';
import { KaleidoscopeComponent } from './kaleidoscope.component';


@NgModule({
  declarations: [KaleidoscopeComponent],
  imports: [
    CommonModule,
    KaleidoscopeRoutingModule
  ]
})
export class KaleidoscopeModule { }
