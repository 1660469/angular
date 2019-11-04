import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {Routes, RouterModule} from '@angular/router';


 import { AlertModule } from 'ngx-bootstrap';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { ChiTietSVComponent } from './chi-tiet-sv/chi-tiet-sv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinhvienService } from './sinhvien.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormComponent,
    SinhVienComponent,
    ChiTietSVComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  providers: [
    SinhvienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
