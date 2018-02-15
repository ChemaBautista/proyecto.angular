import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarGestionComponent } from './calendar-gestion.component';

describe('CalendarGestionComponent', () => {
  let component: CalendarGestionComponent;
  let fixture: ComponentFixture<CalendarGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
