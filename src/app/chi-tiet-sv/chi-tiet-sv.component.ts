import { Component, OnInit } from '@angular/core';
import { SinhvienService } from '../sinhvien.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { SinhVien1 } from '../sinh-vien1';

@Component({
  selector: 'app-chi-tiet-sv',
  templateUrl: './chi-tiet-sv.component.html',
  styleUrls: ['./chi-tiet-sv.component.css']
})
export class ChiTietSVComponent implements OnInit {
  sinhVien : SinhVien1;
  
  public svId;
  constructor(private route: ActivatedRoute, private chitiet: SinhvienService) { 
  } 
  ngOnInit(){
    
    this.svId = this.route.snapshot.paramMap.get('id');
    this.sinhVien = this.chitiet.arraySinhVien.find(x => x.id == this.svId);
  }
  saveData = function () {
    this.svId = this.route.snapshot.paramMap.get('id');
    if(this.chitiet.arraySinhVien.find(x => x.id == this.svId)){
      
    }

  }
}
