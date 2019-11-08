import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
@Component({
  selector: 'app-children-formctsv',
  templateUrl: './children-formctsv.component.html',
  styleUrls: ['./children-formctsv.component.css']
})
export class ChildrenFormctsvComponent implements OnInit {
  // @Input() fatherName : string;
  private modalService: ModalService;
  constructor() {
  }
  ngOnInit() {
    this.modalService =  new ModalService();
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
