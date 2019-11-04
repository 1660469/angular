import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietSVComponent } from './chi-tiet-sv.component';

describe('ChiTietSVComponent', () => {
  let component: ChiTietSVComponent;
  let fixture: ComponentFixture<ChiTietSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
