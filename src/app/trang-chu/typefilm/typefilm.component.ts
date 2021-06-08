import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typefilm',
  templateUrl: './typefilm.component.html',
  styleUrls: ['./typefilm.component.scss'],
})
export class TypefilmComponent implements OnInit {
  status: boolean = true;
  showFilm() {
    this.status = true;
  }
  showFilmUp() {
    this.status = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
