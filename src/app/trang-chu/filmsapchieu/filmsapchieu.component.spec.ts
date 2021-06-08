import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsapchieuComponent } from './filmsapchieu.component';

describe('FilmsapchieuComponent', () => {
  let component: FilmsapchieuComponent;
  let fixture: ComponentFixture<FilmsapchieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsapchieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsapchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
