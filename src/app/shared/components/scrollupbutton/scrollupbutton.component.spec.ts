import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollupbuttonComponent } from './scrollupbutton.component';

describe('ScrollupbuttonComponent', () => {
  let component: ScrollupbuttonComponent;
  let fixture: ComponentFixture<ScrollupbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollupbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollupbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
