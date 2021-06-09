import { Component, OnInit, ViewChild } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss'],
})
export class QuanLyPhimComponent implements OnInit {
  @ViewChild('formQuanLyFilm') formfilm: any;
  @ViewChild('buttonUpdate') btnUpdate: any;
  @ViewChild('buttonCancel') btnCancel: any;
  @ViewChild('buttonAdd') btnAdd: any;
  constructor(private film: FilmService) {}
  listFilm: Array<any> = [];
  listFilmTemp: Array<any> = [];
  addnewFilm(values: any) {
    if (values.maPhim) {
      this.film.updateFilm(values).subscribe({
        next: () => {
          alert('cập nhật phim thành công!');
          this.formfilm.reset();
        },
        error: () => {
          alert('that bai');
        },
      });
    } else {
      this.film.postFilm(values).subscribe({
        next: () => {
          alert('phim thành công!!');
          this.formfilm.reset();
        },
        error: () => {
          alert('không thành công');
        },
      });
    }
  }
  update(values: any) {
    let hinhAnh = values.getAttribute('data-hinhAnh');
    let maPhim = values.getAttribute('data-maPhim');
    let tenPhim = values.getAttribute('data-tenPhim');
    let moTa = values.getAttribute('data-moTa');
    let daoDien = values.getAttribute('data-daoDien');
    let dienVien = values.getAttribute('data-dienVien');
    let thoiLuong = values.getAttribute('data-thoiLuong');
    let trailer = values.getAttribute('data-trailer');
    let ngayKhoiChieu = values.getAttribute('data-ngayKhoiChieu');
    this.formfilm.setValue({
      hinhAnh,
      maPhim,
      tenPhim,
      moTa,
      daoDien,
      dienVien,
      thoiLuong,
      trailer,
      ngayKhoiChieu,
    });
    console.log(this.btnUpdate);
    this.btnUpdate.nativeElement.style.display = 'block';
    this.btnCancel.nativeElement.style.display = 'block';
    this.btnAdd.nativeElement.style.display = 'none';
  }
  deleteFilm(id: any) {
    this.film.deleteFilm(id).subscribe({
      next: () => {
        alert('xóa phim thành công');
      },
    });
  }
  scroll(target: HTMLElement) {
    target.scrollIntoView();
  }
  findName(value: any) {
    if (value.value) {
      console.log('gia tri la : ', value.value);
      this.listFilm = this.listFilm.filter((item: any) => {
        return item.tenPhim.indexOf(value.value) != -1;
      });
    } else {
      this.listFilm = this.listFilmTemp;
    }
  }
  cancel() {
    this.btnUpdate.nativeElement.style.display = 'none';
    this.btnCancel.nativeElement.style.display = 'none';
    this.btnAdd.nativeElement.style.display = 'block';
    this.formfilm.reset();
  }
  ngOnInit(): void {
    this.film.getListFilm().subscribe({
      next: (result) => {
        this.listFilm = result;
        this.listFilmTemp = result;
      },
      error: () => {},
    });
  }
}
