import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadoutRoutingModule } from './headout-routing.module';
import { HeadoutComponent } from './headout.component';


@NgModule({
  declarations: [HeadoutComponent],
  imports: [
    CommonModule,
    HeadoutRoutingModule
  ]
})
export class HeadoutModule { }
