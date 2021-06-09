import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyDatVeComponent } from './quan-ly-dat-ve/quan-ly-dat-ve.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { PhongChieuComponent } from './phong-chieu/phong-chieu.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    QuanLyPhimComponent,
    AdminComponent,
    QuanLyDatVeComponent,
    QuanLyLichChieuComponent,
    PhongChieuComponent,
    QuanLyNguoiDungComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
