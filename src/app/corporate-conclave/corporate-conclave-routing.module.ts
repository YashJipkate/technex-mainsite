import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorporateConclaveComponent } from './corporate-conclave.component';

const routes: Routes = [{ path: '', component: CorporateConclaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateConclaveRoutingModule { }
