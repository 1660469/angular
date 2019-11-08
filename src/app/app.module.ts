import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ModalModule} from 'ng2-modal';
import {Routes, RouterModule} from '@angular/router';


 import { AlertModule } from 'ngx-bootstrap';
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { ChiTietSVComponent } from './chi-tiet-sv/chi-tiet-sv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinhvienService } from './sinhvien.service';
import { FormchitietsvComponent } from './formchitietsv/formchitietsv.component';
import { ChildrenFormctsvComponent } from './children-formctsv/children-formctsv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormComponent,
    SinhVienComponent,
    ChiTietSVComponent,
    PageNotFoundComponent,
    FormchitietsvComponent,
    ChildrenFormctsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [
    SinhvienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
