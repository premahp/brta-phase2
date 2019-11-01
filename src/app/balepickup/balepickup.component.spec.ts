import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalepickupComponent } from './balepickup.component';

describe('BalepickupComponent', () => {
  let component: BalepickupComponent;
  let fixture: ComponentFixture<BalepickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalepickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalepickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
