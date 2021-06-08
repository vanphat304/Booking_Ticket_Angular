import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
declare var $: any;
@Component({
  selector: 'app-filmsapchieu',
  templateUrl: './filmsapchieu.component.html',
  styleUrls: ['./filmsapchieu.component.scss'],
})
export class FilmsapchieuComponent implements OnInit, AfterViewChecked {
  flag: boolean = false;
  listFilmPlaying: any = [];

  constructor(private listfilm: FilmService) {}

  ngOnInit(): void {
    this.listfilm.getListFilm().subscribe({
      next: (result) => {
        this.listFilmPlaying = result;
        this.flag = true;
      },
    });
  }

  ngAfterViewChecked() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<img src='../../../assets/img/arrow-left.png'>",
        "<img src='../../../assets/img/arrow-right.png'>",
      ],
      responsive: {
        0: {
          items: 4,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    });
  }
}
