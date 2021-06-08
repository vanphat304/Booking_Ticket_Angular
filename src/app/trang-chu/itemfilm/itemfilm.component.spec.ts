import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemfilmComponent } from './itemfilm.component';

describe('ItemfilmComponent', () => {
  let component: ItemfilmComponent;
  let fixture: ComponentFixture<ItemfilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemfilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
