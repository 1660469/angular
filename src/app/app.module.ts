import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ModalModule
import {Routes, RouterModule} from '@angular/router';

// AlertModule
import { StudentComponent } from './student/student.component';
import { FormComponent } from './form/form.component';
import { SinhVienComponent } from './sinh-vien/sinh-vien.component';
import { ChiTietSVComponent } from './chi-tiet-sv/chi-tiet-sv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SinhvienService } from './sinhvien.service';
import { FormchitietsvComponent } from './formchitietsv/formchitietsv.component';
import { ChildrenFormctsvComponent } from './children-formctsv/children-formctsv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { AppFieldErrorDisplayComponent } from './app-field-error-display/app-field-error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FormComponent,
    SinhVienComponent,
    ChiTietSVComponent,
    PageNotFoundComponent,
    FormchitietsvComponent,
    ChildrenFormctsvComponent,
    ModalComponent,
    AppFieldErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AlertModule.forRoot(),
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    // ModalModule
   // DialogModule,
   ReactiveFormsModule
  ],
  providers: [
    SinhvienService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
