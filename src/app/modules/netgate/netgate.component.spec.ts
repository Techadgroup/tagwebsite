import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetgateComponent } from './netgate.component';

describe('NetgateComponent', () => {
  let component: NetgateComponent;
  let fixture: ComponentFixture<NetgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
