import { AnimationBuilder } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemfilm',
  templateUrl: './itemfilm.component.html',
  styleUrls: ['./itemfilm.component.scss'],
})
export class ItemfilmComponent implements OnInit {
  @Input() itemFilm: any;

  constructor() {}

  ngOnInit(): void {}
}
