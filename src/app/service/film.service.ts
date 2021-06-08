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
    // let url = 'https://6050ecd75346090017670d95.mockapi.io/timhieuangular/film/test'
    // let obser = this.http.get(url).pipe(map((result:Response)=>result.json()))
    // return obser ;
    const url = 'https://60b4a5e74ecdc10017481064.mockapi.io/listFilm';

    // let params = new HttpParams();
    // params = params.append('maNhom', 'GP01');
    return this.http.get<any[]>(url);

    //   const url =
    //
    // let params = new HttpParams();
    // params = params.append('maNhom', 'GP01');
    // return this.http.get<Movie[]>(url, { params });
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
}
