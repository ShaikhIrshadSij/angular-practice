import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPracticeComponent } from './basic-practice.component';

describe('BasicPracticeComponent', () => {
  let component: BasicPracticeComponent;
  let fixture: ComponentFixture<BasicPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
