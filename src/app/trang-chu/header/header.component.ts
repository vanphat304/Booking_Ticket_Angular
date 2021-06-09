import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {path} from 'path';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = true;
  name: any;
  constructor(private router: Router) {}
  dangXuat() {
    localStorage.clear();
    this.login = true;
  }

  ngOnInit(): void {
    let userStatus = localStorage.getItem('user');
    if (userStatus != null) {
      this.name = JSON.parse(userStatus);
      this.login = false;
    }
  }
}
