import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDangNhapComponent } from './trang-dang-nhap/trang-dang-nhap.component';
import { TrangDangKyComponent } from './trang-dang-ky/trang-dang-ky.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
@NgModule({
  declarations: [TrangDangNhapComponent, TrangDangKyComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TrangChuModule,
  ],
})
export class AuthModule {}
