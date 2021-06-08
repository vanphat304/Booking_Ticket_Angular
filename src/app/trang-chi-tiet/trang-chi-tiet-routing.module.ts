import { NgModule } from '@angular/core';

import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'detail/:id', component: TrangChiTietComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrangChiTietRoutingModule {}
