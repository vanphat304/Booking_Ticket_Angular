import { NgModule } from '@angular/core';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: TrangchuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangChuRoutingModule {}
