import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { AdminComponent } from './admin.component';
import { QuanLyDatVeComponent } from './quan-ly-dat-ve/quan-ly-dat-ve.component';
import { QuanLyLichChieuComponent } from './quan-ly-lich-chieu/quan-ly-lich-chieu.component';
import { PhongChieuComponent } from './phong-chieu/phong-chieu.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      //neu path : /admin =>tu dong chuyen sang /admin /user
      { path: '', redirectTo: 'quanlyfilm' },
      { path: 'quanlyfilm', component: QuanLyPhimComponent },
      { path: 'quanlydatve', component: QuanLyDatVeComponent },
      { path: 'quanlyphongchieu', component: PhongChieuComponent },
      { path: 'quanlylichchieu', component: QuanLyLichChieuComponent },
      { path: 'quanlylinguoidung', component: QuanLyNguoiDungComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
