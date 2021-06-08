import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(values: any): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.http.post(url, { ...values, maNhom: 'GP01' });
  }
  signin(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, { ...values });
  }
}
