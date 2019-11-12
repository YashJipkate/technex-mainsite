import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThinkTalksRoutingModule } from './think-talks-routing.module';
import { ThinkTalksComponent } from './think-talks.component';


@NgModule({
  declarations: [ThinkTalksComponent],
  imports: [
    CommonModule,
    ThinkTalksRoutingModule
  ]
})
export class ThinkTalksModule { }
