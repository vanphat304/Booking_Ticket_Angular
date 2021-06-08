import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { Routes, RouterModule } from '@angular/router';
import { TypefilmComponent } from './typefilm/typefilm.component';
const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'film', component: TypefilmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangChuRoutingModule {}
