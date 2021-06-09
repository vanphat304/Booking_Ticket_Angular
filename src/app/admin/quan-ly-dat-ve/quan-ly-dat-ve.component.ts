import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { LichChieuService } from 'src/app/service/lich-chieu.service';
import { PhongChieuService } from 'src/app/service/phong-chieu.service';

@Component({
  selector: 'app-quan-ly-dat-ve',
  templateUrl: './quan-ly-dat-ve.component.html',
  styleUrls: ['./quan-ly-dat-ve.component.scss'],
})
export class QuanLyDatVeComponent implements OnInit {
  listBookingTicket: Array<any> = [];
  listBookingTicketTemp: Array<any> = [];

  constructor(
    private film: FilmService,
    private showtime: LichChieuService,
    private room: PhongChieuService
  ) {}

  findName(value: any) {
    if (value.value) {
      console.log('gia tri la : ', value.value);
      this.listBookingTicket = this.listBookingTicket.filter((item: any) => {
        return item.maVe.indexOf(value.value) != -1;
      });
    } else {
      this.listBookingTicket = this.listBookingTicketTemp;
    }
  }
  deleteTicket(id: any) {
    this.room.deleteTicket(id).subscribe({
      next: () => {
        alert('xóa vé thành công!');
      },
      error: () => {
        alert('loi');
      },
    });
  }
  ngOnInit(): void {
    this.room.getBookingTicket().subscribe({
      next: (result) => {
        this.listBookingTicket = result;
        this.listBookingTicketTemp = result;
        console.log(result);
      },
      error: () => {
        console.log('loi');
      },
    });
  }
}
