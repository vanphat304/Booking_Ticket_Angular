import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}
  getListFilm(): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/listFilm';
    return this.http.get<any[]>(url);
  }
  getFilmDetail(id: string): Observable<any> {
    const url = `https://60b4a5e74ecdc10017481064.mockapi.io/listFilm/${id}`;
    return this.http.get<any[]>(url);
  }
  getShowntimes(): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/lichKhoiChieu';
    return this.http.get<any[]>(url);
  }
  getSlot(maLichChieu: any): Observable<any> {
    const url = `https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi/${maLichChieu}`;
    return this.http.get<any[]>(url);
  }
  updateSlot(values: any, id: any): Observable<any> {
    const url = `https://60b4b3e84ecdc10017481356.mockapi.io/choNgoi/${id}`;
    return this.http.put(url, { ...values });
  }
  postUser(values: any): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/datVe';
    return this.http.post(url, { ...values });
  }
  getbookingDetail(): Observable<any> {
    const url = `https://60b4a5e74ecdc10017481064.mockapi.io/datVe`;
    return this.http.get(url);
  }
  postFilm(values: any): Observable<any> {
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/listFilm';
    return this.http.post(url, { ...values });
  }
}
