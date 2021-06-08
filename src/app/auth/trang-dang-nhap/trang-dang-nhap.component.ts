import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.scss'],
})
export class TrangDangNhapComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  dangNhap(value: any) {
    this.auth.signin(value).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('tài khoản hoặc mật khẩu không đúng');
      },
    });
  }
  ngOnInit(): void {}
}
