import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss'],
})
export class QuanLyNguoiDungComponent implements OnInit {
  @ViewChild('formDangKy') formdk: any;
  @ViewChild('buttonUpdate') btnUpdate: any;
  @ViewChild('buttonCancel') btnCancel: any;
  @ViewChild('buttonAdd') btnAdd: any;

  danhDanhUser: any;
  temp: any;
  constructor(private auth: AuthService, private router: Router) {}

  addnewUser(values: any) {
    if (values.maNguoiDung) {
      this.auth.uppdateUser(values).subscribe({
        next: () => {
          alert('cập nhật thành công');
          this.btnUpdate.nativeElement.style.display = 'none';
          this.btnCancel.nativeElement.style.display = 'none';
          this.btnAdd.nativeElement.style.display = 'block';
          this.formdk.reset();
        },
      });
    } else {
      this.auth.signup(values).subscribe({
        next: (result) => {
          alert('thêm người dùng thành công');
          this.formdk.reset();
        },
        error: (err) => {
          alert(err.error);
          return;
        },
      });
      this.auth.signupfa(values).subscribe({
        next: () => {
          // alert('dk thanh cong');
          this.formdk.reset();
        },
      });
    }

    console.log(values);
  }
  update(values: any) {
    let TaiKhoan = values.getAttribute('data-taikhoan');
    let MatKhau = values.getAttribute('data-matKhau');
    let HoTen = values.getAttribute('data-hoTen');
    let Email = values.getAttribute('data-email');
    let Sdt = values.getAttribute('data-sdt');
    let MaLoaiNguoiDung = values.getAttribute('data-maLoaiNguoiDung');
    let MaNguoiDung = values.getAttribute('data-maNguoiDung');
    this.formdk.setValue({
      taiKhoan: TaiKhoan,
      matKhau: MatKhau,
      hoTen: HoTen,
      email: Email,
      sdt: Sdt,
      maLoaiNguoiDung: MaLoaiNguoiDung,
      maNguoiDung: MaNguoiDung,
    });
    console.log(this.btnUpdate);
    this.btnUpdate.nativeElement.style.display = 'block';
    this.btnCancel.nativeElement.style.display = 'block';
    this.btnAdd.nativeElement.style.display = 'none';
  }
  deleteUser(values: any) {
    this.auth.deleteUser(values).subscribe({
      next: () => {
        alert('xóa người dùng thành công');
      },
    });
  }
  cancel() {
    this.btnUpdate.nativeElement.style.display = 'none';
    this.btnCancel.nativeElement.style.display = 'none';
    this.btnAdd.nativeElement.style.display = 'block';
    this.formdk.reset();
  }
  findName(value: any) {
    if (value.value) {
      console.log('gia tri la : ', value.value);
      this.danhDanhUser = this.danhDanhUser.filter((item: any) => {
        return item.taiKhoan.indexOf(value.value) != -1;
      });
    } else {
      this.danhDanhUser = this.temp;
    }
  }

  ngOnInit(): void {
    this.auth.getUser().subscribe({
      next: (result) => {
        this.danhDanhUser = result;
        this.temp = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
