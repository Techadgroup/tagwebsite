import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcsrComponent } from './blogcsr.component';

describe('BlogcsrComponent', () => {
  let component: BlogcsrComponent;
  let fixture: ComponentFixture<BlogcsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
