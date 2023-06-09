import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetgatedetailsComponent } from './netgatedetails.component';

describe('NetgatedetailsComponent', () => {
  let component: NetgatedetailsComponent;
  let fixture: ComponentFixture<NetgatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetgatedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetgatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
