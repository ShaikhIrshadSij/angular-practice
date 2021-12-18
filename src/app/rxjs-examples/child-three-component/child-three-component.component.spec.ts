import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildThreeComponentComponent } from './child-three-component.component';

describe('ChildThreeComponentComponent', () => {
  let component: ChildThreeComponentComponent;
  let fixture: ComponentFixture<ChildThreeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildThreeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildThreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
