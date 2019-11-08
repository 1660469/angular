import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenFormctsvComponent } from './children-formctsv.component';

describe('ChildrenFormctsvComponent', () => {
  let component: ChildrenFormctsvComponent;
  let fixture: ComponentFixture<ChildrenFormctsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenFormctsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenFormctsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
