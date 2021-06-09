import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trang-dang-ky',
  templateUrl: './trang-dang-ky.component.html',
  styleUrls: ['./trang-dang-ky.component.scss'],
})
export class TrangDangKyComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  dangKy(values: any) {
    let obj: object = values;
    this.auth.signup(obj).subscribe({
      next: (result) => {
        alert('đăng ký thành công');
        this.router.navigate(['/auth/trangdangnhap']);
      },
      error: (err) => {
        alert(err.error);
        return;
      },
    });
    this.auth.signupfa(obj).subscribe({
      next: () => {},
    });
    console.log(values);
    console.log(values);
  }
  ngOnInit(): void {}
}
