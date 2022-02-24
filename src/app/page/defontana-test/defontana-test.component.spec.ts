import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefontanaTestComponent } from './defontana-test.component';

describe('DefontanaTestComponent', () => {
  let component: DefontanaTestComponent;
  let fixture: ComponentFixture<DefontanaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefontanaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefontanaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
