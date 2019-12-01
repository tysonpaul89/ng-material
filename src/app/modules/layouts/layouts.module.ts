import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialLayoutModule } from '@core/material/material-layout.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MaterialLayoutModule,
  ]
})
export class LayoutsModule { }
