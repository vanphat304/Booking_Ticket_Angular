import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { DatGheRoutingModule } from './dat-ghe-routing.module';
import { ChiTietDatVeComponent } from './chi-tiet-dat-ve/chi-tiet-dat-ve.component';

@NgModule({
  declarations: [GheComponent, DanhSachGheComponent, ChiTietDatVeComponent],
  imports: [CommonModule, DatGheRoutingModule],
  exports: [GheComponent, DanhSachGheComponent, ChiTietDatVeComponent],
})
export class DatGheModule {}
