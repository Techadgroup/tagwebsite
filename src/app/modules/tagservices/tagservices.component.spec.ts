import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagservicesComponent } from './tagservices.component';

describe('TagservicesComponent', () => {
  let component: TagservicesComponent;
  let fixture: ComponentFixture<TagservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
