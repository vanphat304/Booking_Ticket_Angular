import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { LichChieuService } from 'src/app/service/lich-chieu.service';
import { PhongChieuService } from 'src/app/service/phong-chieu.service';

@Component({
  selector: 'app-quan-ly-lich-chieu',
  templateUrl: './quan-ly-lich-chieu.component.html',
  styleUrls: ['./quan-ly-lich-chieu.component.scss'],
})
export class QuanLyLichChieuComponent implements OnInit {
  listMaPhim: Array<any> = [];
  listMaPhong: Array<any> = [];
  listShownTime: Array<any> = [];
  listShownTimeTemp: Array<any> = [];
  countSlot: any;

  @ViewChild('formQuanLyLichChieu') formshowntime: any;
  @ViewChild('buttonUpdate') btnUpdate: any;
  @ViewChild('buttonCancel') btnCancel: any;
  @ViewChild('buttonAdd') btnAdd: any;
  themLichChieu(values: any) {
    if (values.maLichChieu) {
      this.showtime.updateShowTimes(values).subscribe({
        next: () => {
          alert('cập nhật thành công');
          this.btnUpdate.nativeElement.style.display = 'none';
          this.btnCancel.nativeElement.style.display = 'none';
          this.btnAdd.nativeElement.style.display = 'block';
          this.formshowntime.reset();
        },
        error: () => {
          alert('thất bại');
        },
      });
    } else {
      let slot = [];
      for (let i = 1; i < 50; i++) {
        let obj = {
          soGhe: i,
          tenGhe: 'ghe ' + i,
          gia: values.giaVe,
          trangThai: false,
        };
        slot.push(obj);
      }
      values.choNgoi = slot;
      this.showtime.postShowTimes(values).subscribe({
        next: () => {
          alert('thêm lịch chiếu thành công');
          this.btnUpdate.nativeElement.style.display = 'none';
          this.btnCancel.nativeElement.style.display = 'none';
          this.btnAdd.nativeElement.style.display = 'block';
          this.formshowntime.reset();
        },
        error: () => {
          alert('thêm lịch chiếu lỗi');
        },
      });
    }
  }
  scroll(target: HTMLElement) {
    target.scrollIntoView();
  }
  findName(value: any) {
    if (value.value) {
      console.log('gia tri la : ', value.value);
      this.listShownTime = this.listShownTime.filter((item: any) => {
        return item.maPhim.indexOf(value.value) != -1;
      });
    } else {
      this.listShownTime = this.listShownTimeTemp;
    }
  }
  update(values: any) {
    let maLichChieu = values.getAttribute('data-maLichChieu');
    let maPhim = values.getAttribute('data-maPhim');
    let maPhong = values.getAttribute('data-maPhong');
    let thoiGianBD = values.getAttribute('data-thoiGianBD');
    let giaVe = values.getAttribute('data-giaVe');
    this.formshowntime.setValue({
      maLichChieu,
      maPhim,
      maPhong,
      thoiGianBD,
      giaVe,
    });
    console.log(this.btnUpdate);
    this.btnUpdate.nativeElement.style.display = 'block';
    this.btnCancel.nativeElement.style.display = 'block';
    this.btnAdd.nativeElement.style.display = 'none';
  }
  cancel() {
    this.btnUpdate.nativeElement.style.display = 'none';
    this.btnCancel.nativeElement.style.display = 'none';
    this.btnAdd.nativeElement.style.display = 'block';
    this.formshowntime.reset();
  }
  deleteShownTime(id: any) {
    this.showtime.deleteShowTimes(id).subscribe({
      next: () => {
        alert('xóa lịch chiếu thành công');
      },
      error: () => {
        alert('không thành công');
      },
    });
  }
  constructor(
    private film: FilmService,
    private showtime: LichChieuService,
    private room: PhongChieuService
  ) {}

  ngOnInit(): void {
    this.film.getListFilm().subscribe({
      next: (result) => {
        this.listMaPhim = result.map((item: any) => {
          return item.maPhim;
        });
      },
    });
    this.room.getListRoom().subscribe({
      next: (result) => {
        this.listMaPhong = result.map((item: any) => {
          return item.maPhong;
        });
        this.countSlot = result;
      },
    });
    this.showtime.getListShowTimes().subscribe({
      next: (result) => {
        this.listShownTime = result;
        this.listShownTimeTemp = result;
      },
    });
  }
}
