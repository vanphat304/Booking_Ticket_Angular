import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmdangchieuComponent } from './filmdangchieu.component';

describe('FilmdangchieuComponent', () => {
  let component: FilmdangchieuComponent;
  let fixture: ComponentFixture<FilmdangchieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmdangchieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmdangchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
