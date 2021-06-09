import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongChieuComponent } from './phong-chieu.component';

describe('PhongChieuComponent', () => {
  let component: PhongChieuComponent;
  let fixture: ComponentFixture<PhongChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhongChieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhongChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
