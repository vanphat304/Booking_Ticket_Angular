import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss'],
})
export class TrangChiTietComponent implements OnInit {
  objdiv: any;
  itemfilm: any;
  showntime: any;
  constructor(private film: FilmService, private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe({
      next: (params) => {
        this.film.getFilmDetail(params.id).subscribe({
          next: (result) => {
            this.itemfilm = result;
            console.log(this.itemfilm);
          },
          error: (err) => {
            console.log(err);
          },
        });
        this.film.getShowntimes().subscribe({
          next: (result) => {
            this.showntime = result.filter((show: any) => {
              return show.maPhim == params.id;
            });
            console.log('show', this.showntime);
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  scroll(target: HTMLElement) {
    target.scrollIntoView();
  }
}
