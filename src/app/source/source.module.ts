import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceRoutingModule } from './source-routing.module';
import { SourceListComponent } from './source-list/source-list.component';
import { SourceAddComponent } from './source-add/source-add.component';

@NgModule({
  declarations: [SourceListComponent, SourceAddComponent],
  imports: [
    CommonModule,
    SourceRoutingModule
  ]
})
export class SourceModule { }
