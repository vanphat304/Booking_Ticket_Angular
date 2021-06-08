import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefilmComponent } from './typefilm.component';

describe('TypefilmComponent', () => {
  let component: TypefilmComponent;
  let fixture: ComponentFixture<TypefilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypefilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
