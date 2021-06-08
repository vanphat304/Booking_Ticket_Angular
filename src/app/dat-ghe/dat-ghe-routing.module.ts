import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { Routes, RouterModule } from '@angular/router';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';

const routes: Routes = [
  { path: '', component: DanhSachGheComponent },
  { path: 'chitietdatve', component: ChiTietDatVeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatGheRoutingModule {}
