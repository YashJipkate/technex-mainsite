import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupFairRoutingModule } from './startup-fair-routing.module';
import { StartupFairComponent } from './startup-fair.component';


@NgModule({
  declarations: [StartupFairComponent],
  imports: [
    CommonModule,
    StartupFairRoutingModule
  ]
})
export class StartupFairModule { }
