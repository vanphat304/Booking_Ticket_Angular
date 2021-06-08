import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrangChuModule } from './trang-chu/trang-chu.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatGheModule } from './dat-ghe/dat-ghe.module';
import { TrangChiTietModule } from './trang-chi-tiet/trang-chi-tiet.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    DatGheModule,
    TrangChiTietModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
