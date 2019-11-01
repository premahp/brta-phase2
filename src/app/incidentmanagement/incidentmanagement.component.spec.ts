import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentmanagementComponent } from './incidentmanagement.component';

describe('IncidentmanagementComponent', () => {
  let component: IncidentmanagementComponent;
  let fixture: ComponentFixture<IncidentmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
