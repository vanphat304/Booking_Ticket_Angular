import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhongChieuService {
  constructor(private http: HttpClient) {}
  getListRoom(): Observable<any> {
    let url = 'https://60b4b3e84ecdc10017481356.mockapi.io/phongChieu';
    return this.http.get<any>(url);
  }
  getBookingTicket(): Observable<any> {
    let url = 'https://60b4a5e74ecdc10017481064.mockapi.io/datVe';
    return this.http.get<any>(url);
  }
  deleteTicket(id: any): Observable<any> {
    let url = `https://60b4a5e74ecdc10017481064.mockapi.io/datVe/${id}`;
    return this.http.delete<any>(url);
  }
  postRoom(values: any): Observable<any> {
    let url = 'https://60b4b3e84ecdc10017481356.mockapi.io/phongChieu';
    return this.http.post<any>(url, { ...values });
  }
  updateRoom(values: any): Observable<any> {
    let url = `https://60b4b3e84ecdc10017481356.mockapi.io/phongChieu/${values.maPhong}`;
    return this.http.put<any>(url, { ...values });
  }
  deleteRoom(id: any): Observable<any> {
    let url = `https://60b4b3e84ecdc10017481356.mockapi.io/phongChieu/${id}`;
    return this.http.delete<any>(url);
  }
}
