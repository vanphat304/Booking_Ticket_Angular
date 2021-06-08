import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'datghe/:id',
    loadChildren: () =>
      import('./dat-ghe/dat-ghe.module').then((m) => m.DatGheModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./trang-chi-tiet/trang-chi-tiet.module').then(
        (m) => m.TrangChiTietModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./trang-chu/trang-chu.module').then((m) => m.TrangChuModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
