import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { SinhvienService } from '../sinhvien.service';
import { SinhVien1 } from '../sinh-vien1';

@Component({
  selector: 'app-children-formctsv',
  templateUrl: './children-formctsv.component.html',
  styleUrls: ['./children-formctsv.component.css']
})
export class ChildrenFormctsvComponent implements OnInit {
  @ViewChild('add', { static: false }) add: ElementRef;
  arrayError = {
    khoatxt: '',
  };
  MainFacultyArray: SinhVien1;
  changemainFaculty: Array<any>;
  facultyForm: FormGroup;
  mainFacultyForm: FormGroup;
  formArray: FormArray;
  formGroup: FormGroup;
  constructor(private chitiet: SinhvienService, private formBuilder: FormBuilder, private renderer: Renderer2) {
  }
  get formArrayFn(): FormArray {
    return this.formGroup.get('array') as FormArray;
  }
  ngOnInit() {
    // this.facultyForm.valueChanges.subscribe(data => {
    //   console.log(this.facultyForm);
    //   //this.vaidateForm();
    // })
    this.facultyForm = this.formBuilder.group({
      khoatxt: [null, Validators.required],
      desFaculty: [null, Validators.required],
    });
    const formGroupChild = this.formBuilder.group({
      mainFacultytxt: [null, Validators.required],
      desMainFacultytxt: [null, Validators.required],
    });
    this.formGroup = this.formBuilder.group({
      array: this.formBuilder.array([formGroupChild]),
    });
    console.log('this.for', this.formGroup);
    //  = this.formBuilder.group({
    //   mainFacultytxt: [null, Validators.required],
    //   desMainFacultytxt: [null, Validators.required],
    //   items: this.formBuilder.array([this.createItem()])
    // });
  }
  // createItem(): FormGroup{
  //   return this.formBuilder.group({
  //     khoatxt: [null, Validators.required],
  //     desFaculty: [null, Validators.required],
  //   });
  // }
  // addItem(){
  //   this.items.push(this.createItem());
  // }
  duplicate() {
    const formGroupChild = this.formBuilder.group({
      mainFacultytxt: [null, Validators.required],
      desMainFacultytxt: [null, Validators.required],
    });
    (this.formGroup.get('array') as FormArray).controls.push(formGroupChild);
  }
  subFormGroupItem(index: number) {
    // (this.formGroup.get('array') as FormArray).removeAt(index);
    (this.formGroup.get('array') as FormArray).controls.splice(index, 1)  ;
  }
  addFaculty() {
    if (this.facultyForm.valid) {
      console.log('form ok');
      const getValueKhoatxt = this.facultyForm.value.khoatxt;
      const getValueDesFaculty = this.facultyForm.value.desFaculty;
      this.chitiet.arrayFaculty.push({
        id: this.chitiet.arrayFaculty.length + 1,
        name: getValueKhoatxt,
        des: getValueDesFaculty
      });
      console.log('chitiet', this.chitiet.arrayFaculty);
    } else {
      this.validateAllFields(this.facultyForm);

    }
    document.getElementById('khoatxt').innerHTML = '';
    document.getElementById('desFaculty').innerHTML = '';


  }
  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    })
  }
  isFieldValid(field: string) {
    // debugger
    // return !this.facultyForm.get(field).valid && this.facultyForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    //debugger
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  // vaidateForm() { 
  //   console.log('this.facultyForm.controls ', this.facultyForm);
  //   for (var key in this.facultyForm.controls) {
  //     if (this.facultyForm.controls[key].errors) {
  //       // nuts disabled
  //       this.arrayError.khoatxt = 'Looix chi do'
  //       return;
  //     }
  //   }
  // }
  changeMainFaculty(){
    this.changemainFaculty = this.chitiet.arrayMainFaculty.filter(x => x.parentId == this.MainFacultyArray.id);
  }
}
