import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerycategoryComponent } from './gallerycategory.component';

describe('GallerycategoryComponent', () => {
  let component: GallerycategoryComponent;
  let fixture: ComponentFixture<GallerycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerycategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
