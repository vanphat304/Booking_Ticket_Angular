import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { TypefilmComponent } from './typefilm/typefilm.component';
import { FilmdangchieuComponent } from './filmdangchieu/filmdangchieu.component';
import { FilmsapchieuComponent } from './filmsapchieu/filmsapchieu.component';
import { ItemfilmComponent } from './itemfilm/itemfilm.component';
import { FooterComponent } from './footer/footer.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangChuRoutingModule } from './trang-chu-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    TypefilmComponent,
    FilmdangchieuComponent,
    FilmsapchieuComponent,
    ItemfilmComponent,
    FooterComponent,
    TrangchuComponent,
  ],
  imports: [CommonModule, TrangChuRoutingModule],
  exports: [
    HeaderComponent,
    SliderComponent,
    TypefilmComponent,
    FilmdangchieuComponent,
    FilmsapchieuComponent,
    ItemfilmComponent,
    FooterComponent,
    TrangchuComponent,
  ],
})
export class TrangChuModule {}
