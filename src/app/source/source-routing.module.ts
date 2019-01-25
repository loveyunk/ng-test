import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SourceListComponent} from './source-list/source-list.component';
import {SourceAddComponent} from './source-add/source-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: SourceListComponent
  }, {
    path: 'add',
    component: SourceAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceRoutingModule {}
