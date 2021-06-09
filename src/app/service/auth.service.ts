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
  signupfa(values: any): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/nguoiDung';
    if (values.maLoaiNguoiDung != 'admin') {
      values.maLoaiNguoiDung = 'user';
    }
    return this.http.post(url, { ...values });
  }

  signin(values: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, { ...values });
  }
  getUser(): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/nguoiDung';
    return this.http.get<any>(url);
  }
  uppdateUser(values: any): Observable<any> {
    const url = `https://60b4a5e74ecdc10017481064.mockapi.io/nguoiDung/${values.maNguoiDung}`;
    return this.http.put(url, { ...values });
  }

  deleteUser(id: any): Observable<any> {
    const url = `https://60b4a5e74ecdc10017481064.mockapi.io/nguoiDung/${id}`;
    return this.http.delete<any>(url);
  }
}
