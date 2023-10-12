import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainScheduleManagementComponent } from './train-schedule-management.component';

describe('TrainScheduleManagementComponent', () => {
  let component: TrainScheduleManagementComponent;
  let fixture: ComponentFixture<TrainScheduleManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainScheduleManagementComponent]
    });
    fixture = TestBed.createComponent(TrainScheduleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
