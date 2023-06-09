import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalserviceComponent } from './technicalservice.component';

describe('TechnicalserviceComponent', () => {
  let component: TechnicalserviceComponent;
  let fixture: ComponentFixture<TechnicalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
