import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChiTietSVComponent } from './chi-tiet-sv/chi-tiet-sv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { FormchitietsvComponent } from './formchitietsv/formchitietsv.component';


const routersConfig: Routes = [
  {path: '', component: SinhVienComponent},
  {path: 'chitiet/:id', component: ChiTietSVComponent},
  {path: 'edit/:id', component: FormchitietsvComponent},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routersConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
