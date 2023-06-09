import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementteamComponent } from './managementteam.component';

describe('ManagementteamComponent', () => {
  let component: ManagementteamComponent;
  let fixture: ComponentFixture<ManagementteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
