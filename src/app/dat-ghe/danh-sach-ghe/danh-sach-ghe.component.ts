import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss'],
})
export class DanhSachGheComponent implements OnInit {
  danhSachGhe: Array<any> = [];
  tenPhim: String = '';
  thoiGianBD: any = '';
  maLichChieu: String = '';
  maPhim: String = '';
  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  danhSachGheDangDat: Array<any> = [];
  tongTien: Number = 0;
  user: any;
  maVe: any;
  datGheParent(value: any, ghe: any) {
    if (value) {
      this.soGheDaDat++;
      this.soGheConLai--;
      // ghe.trangThai = true;
      this.danhSachGheDangDat.push(ghe);
      console.log(this.danhSachGheDangDat);
      this.tongTien = this.danhSachGheDangDat.reduce((acc, value) => {
        return acc + value.gia;
      }, 0);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.danhSachGheDangDat) {
        if (this.danhSachGheDangDat[index].soGhe === ghe.soGhe) {
          // ghe.trangThai = false;
          this.danhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
      this.tongTien = this.danhSachGheDangDat.reduce((acc, value) => {
        return acc + value.gia;
      }, 0);
      console.log(this.danhSachGheDangDat);
    }
  }
  updateArray() {
    let localUser = localStorage.getItem('user');
    if (localUser != null) {
      this.user = JSON.parse(localUser);
    } else {
      alert('vui lòng đăng nhập trươc khi đặt vé');
      this.router.navigate(['/auth/trangdangnhap']);
      return;
    }

    for (let index in this.danhSachGhe) {
      for (let index1 in this.danhSachGheDangDat) {
        if (
          this.danhSachGhe[index].soGhe ===
          this.danhSachGheDangDat[index1].soGhe
        ) {
          this.danhSachGheDangDat[index1].trangThai = true;
          this.danhSachGhe[index] = this.danhSachGheDangDat[index1];
        }
      }
    }
    let objectSlot: {
      maLichChieu: String;
      maPhim: String;
      tenPhim: String;
      thoiGianBD: String;
      choNgoi: Array<any>;
    } = {
      maLichChieu: this.maLichChieu,
      maPhim: this.maPhim,
      tenPhim: this.tenPhim,
      thoiGianBD: this.thoiGianBD,
      choNgoi: this.danhSachGhe,
    };
    let objectUser: {
      maLichChieu: String;
      taiKhoan: object;
      maChoNgoi: Array<any>;
      tongTien: Number;
      tenPhim: String;
      thoiGianBD: String;
    } = {
      maLichChieu: this.maLichChieu,
      taiKhoan: this.user,
      maChoNgoi: this.danhSachGheDangDat,
      tongTien: this.tongTien,
      tenPhim: this.tenPhim,
      thoiGianBD: this.thoiGianBD,
    };
    // this.maVe = objectUser.maVe;

    console.log(objectSlot);
    this.slot.updateSlot(objectSlot, this.maLichChieu).subscribe({
      next: (result) => {},
      error: (err) => {
        console.log('error update', err);
      },
    });
    this.slot.postUser(objectUser).subscribe({
      next: (result) => {
        this.router.navigate([`datghe/${this.maLichChieu}/chitietdatve`]);
      },
      error: (err) => {
        console.log('error post user', err);
      },
    });
  }

  constructor(
    private slot: FilmService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    for (let ghe of this.danhSachGhe) {
      if (!ghe.trangThai) {
        this.soGheConLai++;
      }
    }
  }

  ngOnInit(): void {
    this.activated.params.subscribe({
      next: (param) => {
        this.slot.getSlot(param.id).subscribe({
          next: (result) => {
            this.danhSachGhe = result.choNgoi;
            this.tenPhim = result.tenPhim;
            this.thoiGianBD = result.thoiGianBD;
            this.maLichChieu = result.maLichChieu;
            this.maPhim = result.maPhim;
            console.log(this.danhSachGhe);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
