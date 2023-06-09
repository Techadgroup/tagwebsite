import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyserviceComponent } from './consultancyservice.component';

describe('ConsultancyserviceComponent', () => {
  let component: ConsultancyserviceComponent;
  let fixture: ComponentFixture<ConsultancyserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultancyserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultancyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
