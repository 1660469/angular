import { Component, OnInit } from '@angular/core';
import { SinhVien1 } from '../sinh-vien1';
import { ActivatedRoute, Router } from '@angular/router';
import { SinhvienService } from '../sinhvien.service';

@Component({
  selector: 'app-formchitietsv',
  templateUrl: './formchitietsv.component.html',
  styleUrls: ['./formchitietsv.component.css']
})
export class FormchitietsvComponent implements OnInit {

  sinhVienForm: SinhVien1;
  public Id;
  constructor(private route: ActivatedRoute, private routeOther: Router, private chitiet: SinhvienService) {
  }

  ngOnInit() {
    this.Id = +this.route.snapshot.paramMap.get('id');
    this.sinhVienForm = this.chitiet.arraySinhVien.find(x => x.id === this.Id);
  }
  saveData = function () {
    this.chitiet.arraySinhVien.some(x => {
      if (x.id === this.Id) {
        x = this.sinhVienForm;
        return true;
      }
      return false;
    });
    return this.routeOther.navigateByUrl('/');
  };
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  

}
