import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeampageRoutingModule } from './teampage-routing.module';
import { TeampageComponent } from './teampage.component';


@NgModule({
  declarations: [TeampageComponent],
  imports: [
    CommonModule,
    TeampageRoutingModule
  ]
})
export class TeampageModule { }
