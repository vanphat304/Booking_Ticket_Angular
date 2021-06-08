import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'trangdangky', component: TrangDangKyComponent },
  { path: 'trangdangnhap', component: TrangDangNhapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
