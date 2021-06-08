import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { config } from 'rxjs';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-chi-tiet-dat-ve',
  templateUrl: './chi-tiet-dat-ve.component.html',
  styleUrls: ['./chi-tiet-dat-ve.component.scss'],
})
export class ChiTietDatVeComponent implements OnInit {
  veDat: any;
  user: any;
  constructor(private film: FilmService, private activated: ActivatedRoute) {}

  ngOnInit(): void {
    let localUser = localStorage.getItem('user');
    if (localUser != null) {
      this.user = JSON.parse(localUser);
    }

    this.film.getbookingDetail().subscribe({
      next: (result) => {
        let length = result.filter((ticket: any) => {
          return ticket.taiKhoan.taiKhoan == this.user.taiKhoan;
        }).length;

        this.veDat = result.filter((ticket: any) => {
          return ticket.taiKhoan.taiKhoan == this.user.taiKhoan;
        })[length - 1];
        console.log('ve dat', this.veDat);
      },
    });
  }
}
