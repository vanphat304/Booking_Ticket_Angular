import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDatVeComponent } from './quan-ly-dat-ve.component';

describe('QuanLyDatVeComponent', () => {
  let component: QuanLyDatVeComponent;
  let fixture: ComponentFixture<QuanLyDatVeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyDatVeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
