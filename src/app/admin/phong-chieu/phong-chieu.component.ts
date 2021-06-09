import { Component, OnInit, ViewChild } from '@angular/core';
import { PhongChieuService } from 'src/app/service/phong-chieu.service';

@Component({
  selector: 'app-phong-chieu',
  templateUrl: './phong-chieu.component.html',
  styleUrls: ['./phong-chieu.component.scss'],
})
export class PhongChieuComponent implements OnInit {
  @ViewChild('formRoom') formRoom: any;
  @ViewChild('buttonUpdate') btnUpdate: any;
  @ViewChild('buttonCancel') btnCancel: any;
  @ViewChild('buttonAdd') btnAdd: any;
  constructor(private room: PhongChieuService) {}

  listRoom: Array<any> = [];
  listRoomTemp: Array<any> = [];

  addformRoom(value: any) {
    if (value.maPhong) {
      this.room.updateRoom(value).subscribe({
        next: () => {
          alert('cập nhật thành công');
          this.btnUpdate.nativeElement.style.display = 'none';
          this.btnCancel.nativeElement.style.display = 'none';
          this.btnAdd.nativeElement.style.display = 'block';
          this.formRoom.reset();
        },
      });
    } else {
      this.room.postRoom(value).subscribe({
        next: () => {
          alert('thêm phòng thành công');
          this.btnUpdate.nativeElement.style.display = 'none';
          this.btnCancel.nativeElement.style.display = 'none';
          this.btnAdd.nativeElement.style.display = 'block';
          this.formRoom.reset();
        },
      });
    }
  }
  update(values: any) {
    let maPhong = values.getAttribute('data-maPhong');
    let tenPhong = values.getAttribute('data-tenPhong');
    let soLuongChoNgoi = values.getAttribute('data-soLuongChoNgoi');
    this.formRoom.setValue({
      maPhong,
      tenPhong,
      soLuongChoNgoi,
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
    this.formRoom.reset();
  }
  deleteRoom(id: any) {
    this.room.deleteRoom(id).subscribe({
      next: () => {
        alert('xóa phòng thành công');
      },
      error: () => {
        alert('không thành công');
      },
    });
  }
  findName(value: any) {
    if (value.value) {
      console.log('gia tri la : ', value.value);
      this.listRoom = this.listRoom.filter((item: any) => {
        return item.maPhong.indexOf(value.value) != -1;
      });
    } else {
      this.listRoom = this.listRoomTemp;
    }
  }
  scroll(target: HTMLElement) {
    target.scrollIntoView();
  }
  ngOnInit(): void {
    this.room.getListRoom().subscribe({
      next: (result) => {
        this.listRoom = result;
        this.listRoomTemp = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
