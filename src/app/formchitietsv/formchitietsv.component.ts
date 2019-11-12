import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SinhVien1 } from '../sinh-vien1';
import { ActivatedRoute, Router } from '@angular/router';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-formchitietsv',
  templateUrl: './formchitietsv.component.html',
  styleUrls: ['./formchitietsv.component.css'],
})
export class FormchitietsvComponent implements OnInit {
  // myName = 'Dinh';
  sinhVienForm: SinhVien1;
  departments: Array<any>;
  public Id;
  today = Date.now();
  constructor(private route: ActivatedRoute, private routeOther: Router, private chitiet: SinhvienService) {
  }
  ngOnInit() {
    this.Id = +this.route.snapshot.paramMap.get('id');
    console.log('chitiet.arrayFaculty', this.chitiet.arrayFaculty);
    this.sinhVienForm = this.chitiet.arraySinhVien.find(x => x.id === this.Id);
    this.facultyChange(1);
    console.log(this.chitiet.arrayFaculty);
  }
  saveData = function () {
    console.log('item', this.sinhVienForm)
    this.chitiet.arraySinhVien.some(x => {
      if (x.id === this.Id) {
        x = this.sinhVienForm;
        return true;
      }
      return false;
    });
    return this.routeOther.navigateByUrl('/');
  };
  back() {
    this.routeOther.navigateByUrl('/');
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  facultyChange(e: number) {
    this.departments = this.chitiet.arrayMainFaculty.filter(x => x.parentId === this.sinhVienForm.faculty.id);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  
}