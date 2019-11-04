import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  mssv: number;
  name: string;
  constructor() { 
    this.mssv = 1;
    this.name = 'vo van quang';
  }
  StudentA: Student = {
    mssv: 1,
    name: 'quang'
  };

  ngOnInit() {
  }

}
