import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LichChieuService {
  constructor(private http: HttpClient) {}
  getListShowTimes(): Observable<any> {
    let url = 'https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi';
    return this.http.get<any>(url);
  }
  postShowTimes(values: any): Observable<any> {
    let url = 'https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi';
    return this.http.post(url, { ...values });
  }
  updateShowTimes(values: any): Observable<any> {
    let url = `https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi/${values.maLichChieu}`;
    return this.http.put(url, { ...values });
  }
  deleteShowTimes(id: any): Observable<any> {
    let url = `https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi/${id}`;
    return this.http.delete(url);
  }
}
