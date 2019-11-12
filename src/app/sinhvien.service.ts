import { Injectable } from '@angular/core';
import { SinhVien1 } from './sinh-vien1';
@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  constructor() { }
  arraySinhVien = [
    new SinhVien1(1, 'Quang', '247 Phan Chu Trinh', 'Nam', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
    new SinhVien1(2, 'Tâm', '247 Phan Chu Trinh', 'Nam', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
    new SinhVien1(3, 'Đạt', '247 Phan Chu Trinh', 'Nam', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
    new SinhVien1(4, 'Quyền', '247 Phan Chu Trinh', 'Nam', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
    new SinhVien1(5, 'Phúc', '247 Phan Chu Trinh', 'Nữ', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
    new SinhVien1(6, 'Vân', '247 Phan Chu Trinh', 'Nữ', '1998-10-10', 241761142, { id: 2, name: 'DTVT' }, { id: 1, name: 'Điện', parentId: 2 }),
  ];
  arrayFaculty = [
    {
      id: 1,
      name: 'CNTT',
      des: 'Comprehensive list of synony'
    },
    {
      id: 2,
      name: 'DTVT',
      des: 'Comprehensive list of synony'

    },
    {
      id: 3,
      name: 'Y',
      des: 'Comprehensive list of synony'
    },
  ];

  arrayMainFaculty = [
    {
      id: 1,
      name: 'C#',
      parentId: 1
    },
    {
      id: 2,
      name: 'C++',
      parentId: 1
    },
    {
      id: 3,
      name: 'Web',
      parentId: 1
    },
    {
      id: 4,
      name: 'Điện',
      parentId: 2
    },
    {
      id: 5,
      name: 'Cáp quang',
      parentId: 2
    },
    {
      id: 6,
      name: 'Vitamin A',
      parentId: 3
    },
    {
      id: 7,
      name: 'Vitamin e',
      parentId: 3
    },
    {
      id: 8,
      name: 'Vitamin c',
      parentId: 3
    },
  ];

}
