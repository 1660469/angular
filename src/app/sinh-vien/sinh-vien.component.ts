import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../sinhvien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinh-vien',
  templateUrl: './sinh-vien.component.html',
  styleUrls: ['./sinh-vien.component.css'],
})
export class SinhVienComponent implements OnInit {
  arraySinhVien = [];
  constructor(
    private sinhvienService: SinhvienService, private router: Router
  ) { }
  
  ngOnInit() {
    this.arraySinhVien = this.sinhvienService.arraySinhVien;
  }
  // goToPage = function(){
  //   this.router.navigateByUrl(['/chitiet/2']);
  // }
}
