import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss'],
})
export class QuanLyPhimComponent implements OnInit {
  constructor(private film: FilmService) {}

  addnewFilm(values: any) {
    console.log(values);
  }
  ngOnInit(): void {}
}
