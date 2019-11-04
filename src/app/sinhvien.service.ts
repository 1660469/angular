import { Injectable } from '@angular/core';
import { SinhVien1 } from './sinh-vien1';
@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  constructor() { }
  arraySinhVien = [
    new SinhVien1(1, 'Quang','247 Phan Chu Trinh','nam', '10/03/1998', 241761142, 'CNTT', 'Frontend'),
    new SinhVien1(2, 'Tâm','247 Phan Chu Trinh','nam', '10/04/1998', 241761142, 'CNTT', 'Frontend'),
    new SinhVien1(3, 'Đạt','247 Phan Chu Trinh','nam', '10/03/1998', 241761142, 'CNTT', 'Frontend'),
    new SinhVien1(4, 'Quyền','247 Phan Chu Trinh','nam', '10/03/1998', 241761142, 'CNTT', 'Frontend'),
    new SinhVien1(5, 'Phúc','247 Phan Chu Trinh','nam', '10/03/1998', 241761142, 'CNTT', 'Frontend'),
    new SinhVien1(6, 'Vân','247 Phan Chu Trinh','nam', '10/03/1998', 241761142, 'CNTT', 'Frontend'),
  ];
  
  
}
