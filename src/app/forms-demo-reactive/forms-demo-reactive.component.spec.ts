import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDemoReactiveComponent } from './forms-demo-reactive.component';

describe('FormsDemoReactiveComponent', () => {
  let component: FormsDemoReactiveComponent;
  let fixture: ComponentFixture<FormsDemoReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDemoReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDemoReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
