import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateConclaveRoutingModule } from './corporate-conclave-routing.module';
import { CorporateConclaveComponent } from './corporate-conclave.component';


@NgModule({
  declarations: [CorporateConclaveComponent],
  imports: [
    CommonModule,
    CorporateConclaveRoutingModule
  ]
})
export class CorporateConclaveModule { }
